const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StoreSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	//Dia chi
	address: {
		type: String,
	},
	ward: {
		type: String
	},
	district: {
		type: String,
		//enum: ['Tây Hồ', 'Hoàng Mai', 'Thanh Xuân', 'Ba Đình', 'Nam Từ Liêm', 'Bắc Từ Liêm', 'Hai Bà Trưng']
	},
	//so dien thoai
	phonenumber: {
		type: Number
	},
	//kieu loai kinh doanh
	typestore: {
		type: String,
		//enum: ['Cơ sở sản xuất thực phẩm', 'Kinh doanh dịch vụ ăn uống', 'Cả 2']
	},
	//Chung nhan
	issue: {
		type: Number,
	},
	created: {
		type: Date,
		default: Date.now,
        //required: true
	},
	dated: {
		type: Date,
		default: Date.now,
        //required: true
	}
})

module.exports = mongoose.model('stores', StoreSchema)