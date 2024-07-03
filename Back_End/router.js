const router = require('express').Router()
const path = require('path')
const leadRepository = require('./repositories/leadRepository')
// Configurar o router
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..','jsx_compounds','header_sem_React','index.html'));    
})
router.get("/leads", async (req,res) => {
    const body = req.body;
    const options = body.options ? body.options : {};  
    const result = await leadRepository.get(options);
    res.status(200).json(result)
})

router.post("/leads", async (req,res) => {
    const { lead } = req.body;
    const created = await leadRepository.create(lead)
    res.status(201).json(created)
})




router.delete("/leads/:id", async (req,res) => {
    try{
        const { id } = req.params;
        
        await leadRepository.delete(id.toString().trim());
        res.status(201).json("Lead deleted successfully")

    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
})


module.exports = router;