const ProdRegis = require("../models/productregister");
const fs = require('fs');

const registerProduct = async (req, resp) => {
    const { name, userID, email, model, serial_no, purchase_place, purchase_date } = req.body;
    const { file } = req;

    const dataExist = await ProdRegis.findOne({ userID: userID });
    if (!dataExist || dataExist === null) {
        const data = {
            name, email, userID,
            product: [
                {
                    model, serial_no, purchase_place, purchase_date,
                    purchase_proof: file.path,
                }
            ],
        }
        const newData = new ProdRegis(data);
        const saveData = await newData.save();
        return resp.status(200).json({ status: 200, message: 'Data Saved', result: saveData })        
    }
    else {
        const data = {
            model, serial_no, purchase_place, purchase_date,
            purchase_proof: file.path,
        }
        const dataUpdate = await ProdRegis.updateOne({ _id: dataExist._id }, {
            $push: { product: data },
        })
        if(dataUpdate.modifiedCount === 1){
            return resp.status(200).json({ status: 200, message: 'Data Saved', result: dataUpdate })
        }
        else{
            return resp.status(400).json({ status: 400, message: 'Data not saved', result: dataUpdate })
        }
    }
}


module.exports = {
    registerProduct
}