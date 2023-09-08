import { createLinePayClient } from 'line-pay-merchant'

// TODO 不知道能不能用可能要修改資料
const linePayClient = createLinePayClient({
  channelId: '2000684128',
  channelSecretKey: 'c2ce1a7f528021e435d64563b65ae978',
  env: 'development' // env can be 'development' or 'production'
})

try {
  const res = await linePayClient.request.send({
    body: {
      amount: 1000,
      currency: 'TWD',
      orderId: '20211216003',
      packages: [
        {
          id: 'c99abc79-3b29-4f40-8851-bc618ca57856',
          amount: 1000,
          products: [
            {
              name: 'Product Name',
              quantity: 2,
              price: 500
            }
          ]
        }
      ],
      redirectUrls: {
        confirmUrl: 'https://myshop.com/confirmUrl',
        cancelUrl: 'https://myshop.com/cancelUrl'
      }
    }
  })

  console.log(res)
} catch (e) {
  console.log('error', e)
}