import React from 'react';
import { useLoaderData } from 'react-router-dom';

function OrderHistory() {
  const print =async(orderId)=>{
  const fileUrl = `http://localhost:8080/orders/order/${orderId}/print`;
  const fileName = `order-${orderId}.xlsx`;

  fetch(fileUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error('下載檔案時發生錯誤：', error);
    });
  }
  const history = useLoaderData();
  const handelData = Object.keys(history).reduce((acc, key) => {
    const info = history[key];
    return acc.concat({
      name: info.user.name,
      address:info.user.address,
      phone:info.user.phone,
      createdDate: info.createdDate,
      totalAmount:info.totalAmount,
      orderItemList:info.orderItemList,
      orderId:info.orderId,
    });
  }, []);
console.log(handelData);
  return (
    <div>
      
      <h1>訂單紀錄</h1>
      {handelData.map((el)=>(
        <div key={el.createdDate}>
        <button onClick={()=>print(el.orderId)}>印出</button>
        <h2>訂購人資料</h2>
        <div >
          <div>
            {`名字 :${el.name}`}
          </div>
          <div>
            {`地址 :${el.address}`}
          </div>
          <div>
            {`電話 :${el.phone}`}
          </div>
          <div>
            {`總金額 :${el.totalAmount}`}
          </div>

          <div>{`建立時間 :${el.createdDate}`}</div>
          <h2>訂購清單</h2>
          {Object.values(el.orderItemList).map((item) => (
            <div key={`${item.id} ${el.createdDate}`}>
              <div>
                {`產品 :${item.name}`}
              </div>
              <div>{`甜度冰塊 :甜度${item.sweetness}，冰塊${item.ice}`}</div>
              <div>{`數量 :${item.quantity}`}</div>
              <div>{`單品金額 :${item.price}`}</div>
            </div>
          ))}
        </div>
        </div>
      ))}
       </div> 
  )
}

export default OrderHistory;