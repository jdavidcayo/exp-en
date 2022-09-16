import Personal from '../../models/personalModel';
export const newPersonal = async (req, res)=>{
    try{
        await Personal.create({
                name: req.body.name,
                lastName: req.body.lastName,
                dni: req.body.dni || '',
                tel: req.body.tel || null,
                date: req.body.date || null,
                avatar: req.body.avatar || null
            })
            res.json({"message": "Saved!"});
    }catch ( e ){
        res.json({msg: e});
    }
    };
export const updatePersonal = async ( req, res)=>{
    try {
        const [resp] = await Personal.update( req.body , {where: { id: req.params.id}})
        const message = ( resp === 1)? 'Updated!': 'Something wrong';
        res.json( {msg: message} );
    } catch ( e ) {
        res.json({ msg: e });
    }
};
export const deletePersonal = async (req, res )=>{
    try {
        const resp = await Personal.destroy({ where : {id: req.params.id }});
        const msg = ( resp === 1 ) && 'Deleted!'
        res.json({msg: msg })
    } catch (e) {
        res.status(500).json({msg: e});
    }
};
export const getAllPersonal = async ( req, res )=>{
    try {
        const resp = await Personal.findAll();
        res.status(200).json( resp );    
    } catch (e) {
        res.status(500).json( { msg: e } );
    } 
};
export const getPersonal = async (req, res )=>{
    try {
        const resp = await Personal.findByPk( req.params.id );
        const msg = (resp === null) && 'Not found!';
        res.status(200).json( resp || {msg: msg} );
    } catch (e) {
        res.status(500).json( e );
    }
};

