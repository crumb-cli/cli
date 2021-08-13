/**
 * @desc 处理返回banner 数据
 * @param { object } request express 请求对象
 * @param { object } response express 响应对象
 * @returns { object } json 对象
 */
const getAdverising = (request, response) => {
  const result = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
      "advertising_list": [{
        "id": "27",
        "title": "特供",
        "link": "\/pages\/productDetail\/index?id=295",
        "image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/0b9709b4490830a47ad5b370b6a696ca.jpeg",
        "type": "image"
      }]
    },
    "success": true
  }
  // express 提供的方法 直接调用就行
  response.json(result)
}

/**
 * @desc 处理获取 数据
 * @param { object } request express 请求对象
 * @param { object } response express 响应对象
 * @returns { object } json 对象
 */
 const getProductList = (request, response) => {
   console.log('request', request)
  let list = [
    {
      "base_info": {
        "product_name": "进口花伴手礼小花束",
        "publish_status": "1",
        "summary": "进口花伴手礼小花束",
        "product_type": 2,
        "stock": 99996,
        "sale": 7,
        "sale_price": 25800,
        "format_sale_price": "258.00",
        "original_price": 29800,
        "format_original_price": "298.00",
        "shipping_price": 0,
        "format_shipping_price": "0.00",
        "updated_timestamp": null,
        "created_timestamp": 1610858927,
        "item_id": 378,
        "sku_id": 0,
        "sort": 37,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg"
      },
      "specifications": null,
      "galley_image_list": null,
      "brand_story": null,
      "care_instructions": null,
      "special_note": null,
      "logistics_desc": null,
      "after_sale_instructions": null,
      "purchase_note": null,
      "detail": null
    }, {
    "base_info": {
      "product_name": "年宵花水泥盆蝴蝶兰设计",
      "publish_status": "1",
      "summary": "年宵花水泥盆蝴蝶兰设计",
      "product_type": 2,
      "stock": 99997,
      "sale": 4,
      "sale_price": 52000,
      "format_sale_price": "520.00",
      "original_price": 68000,
      "format_original_price": "680.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1612086744,
      "item_id": 393,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/7f0008089c9174ee43c81af2a25ce788.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "年宵花蝴蝶兰盆栽设计",
      "publish_status": "1",
      "summary": "年宵花蝴蝶兰盆栽设计",
      "product_type": 2,
      "stock": 99998,
      "sale": 2,
      "sale_price": 52000,
      "format_sale_price": "520.00",
      "original_price": 68000,
      "format_original_price": "680.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1612086177,
      "item_id": 392,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/58de02e0c1f3480bf2190c5e944ddefb.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "红色系定制",
      "publish_status": "1",
      "summary": "红色系定制",
      "product_type": 2,
      "stock": 99999,
      "sale": 0,
      "sale_price": 68000,
      "format_sale_price": "680.00",
      "original_price": 88000,
      "format_original_price": "880.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1612085978,
      "item_id": 391,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/cea6225257bb428d4319663384dba68f.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "进口寸寸金90cm（含花器挂件）",
      "publish_status": "1",
      "summary": "进口寸寸金90cm（含花器挂件）",
      "product_type": 2,
      "stock": 99999,
      "sale": 16,
      "sale_price": 98000,
      "format_sale_price": "980.00",
      "original_price": 108000,
      "format_original_price": "1080.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1612085810,
      "item_id": 390,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/bd4510844b1307e38a43eb7eeac63014.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "何其美",
      "publish_status": "1",
      "summary": "何其美",
      "product_type": 2,
      "stock": 99999,
      "sale": 15,
      "sale_price": 52000,
      "format_sale_price": "520.00",
      "original_price": 68000,
      "format_original_price": "680.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": 1612085437,
      "created_timestamp": 1612085305,
      "item_id": 389,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/e6e1b90babe35940b66eb18a0874aaf9.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "紫色恋人",
      "publish_status": "1",
      "summary": "紫色恋人",
      "product_type": 2,
      "stock": 99999,
      "sale": 14,
      "sale_price": 128000,
      "format_sale_price": "1280.00",
      "original_price": 158000,
      "format_original_price": "1580.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1612085138,
      "item_id": 388,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/2b758d13177021042ea23a60393a36d4.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "情人节圆筒礼盒",
      "publish_status": "1",
      "summary": "情人节圆筒礼盒",
      "product_type": 2,
      "stock": 99999,
      "sale": 13,
      "sale_price": 39800,
      "format_sale_price": "398.00",
      "original_price": 52000,
      "format_original_price": "520.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1611829185,
      "item_id": 387,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/4d76f0d2d283c8ffdd6c7da7f6a8e4c0.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "巨型亚克力枪炮礼盒",
      "publish_status": "1",
      "summary": "巨型亚克力枪炮礼盒",
      "product_type": 2,
      "stock": 99999,
      "sale": 12,
      "sale_price": 158000,
      "format_sale_price": "1580.00",
      "original_price": 188000,
      "format_original_price": "1880.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1611828887,
      "item_id": 386,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/7a2bf6c3bea5d13809630bdb11a2534f.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "透视亚克力a级玫瑰花盒",
      "publish_status": "1",
      "summary": "透视亚克力a级玫瑰花盒",
      "product_type": 2,
      "stock": 99999,
      "sale": 11,
      "sale_price": 39800,
      "format_sale_price": "398.00",
      "original_price": 52000,
      "format_original_price": "520.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1611827886,
      "item_id": 385,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/95f27ba930360fc394c32f1491c94b74.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }
  ]

  let result = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
      "product_list": list,
      "page_info": {
        "page_size": 10,
        "index": 1,
        "has_more": true,
        "count": 10
      }
    },
    "success": true
  }
  response.json(result)
}
// home Mock api
const HomeMockApi = (app) => {
  app.post('/mock/adverising/getAdvertisingList', getAdverising)
  app.post('/mock/product/getProductLisgt', getProductList)
}

module.exports = HomeMockApi
