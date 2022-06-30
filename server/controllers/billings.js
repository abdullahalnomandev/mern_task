import Billings from "../models/billings.js";

//POST
const createBilling= async(req,res,next)=>{
    const newBill= new Billings(req.body)
    try {
       const saveBill= await newBill.save()
        res.status(200).send(saveBill);
    } catch (errors) {
        console.log(errors);
    }
}


// GET
const getBillings = async (req, res ) => {
  try {
    const billings = await Billings.find();
    res.status(200).json(billings);
  } catch (error) {
    console.log(error);
  }
};


// DELETE 
const deleteBilling = async (req, res,next) => {
  const { id } = req.params;
  console.log('delete',id);
  try { 
    await Billings.findByIdAndRemove(id);
    res.status(200).json({message:'Deleted Successful'});
  } catch (error) {
    console.log(error);
  }
};


// UPDATE
const updateBillings = async (req, res,next) => {

  const updateBilling = req.body;
  const {id} = req.params
  try {
    const updateBill = await Billings.findByIdAndUpdate(id,updateBilling,{upsert: true });
    res.status(200).json(updateBill);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


export { createBilling, getBillings, deleteBilling, updateBillings };