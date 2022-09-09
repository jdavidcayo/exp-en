import Personal from '../../models/personalModel';
export const newPersonal = async (req, res)=>{
        Personal.create({
            name: req.body.name,
            lastName: req.body.lastName,
            dni: req.body.dni || '',
            tel: req.body.tel || null,
            date: req.body.date || null,
            avatar: req.body.avatar || null
        })
};
export const updatePersonal = ()=>{};
export const deletePersonal = ()=>{};
export const getAllPersonal = ()=>{};
export const getPersonal = ()=>{};

