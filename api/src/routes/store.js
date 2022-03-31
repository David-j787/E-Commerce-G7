const {Router} = require("express")
const { Store } = require("../db");

const stores = Router();

stores.get("/", async (req, res) => {
    try {
        const stores = await Store.findAll();

        res.status(200).send(stores);

    } catch (err) {
        res.status(404).send(err)
    }
});

stores.post("/", async (req, res) => {
    try {
        const {
            name,
            address,
            city,
            zip_code,
            state,
            country
        } = req.body;

        const store = await Store.create({
            name,
            address,
            city,
            zip_code,
            state,
            country
        });

        res.status(200).send(store);

    } catch (err) {
        res.status(404).send(err)
    }
});

stores.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            address,
            city,
            zip_code,
            state,
            country
        } = req.body;

        const store = await Store.findOne({
            where: {
                id
            }
        });

        store.update({
            name: name ? name : store.name,
            address: address ? address : store.address,
            city: city ? city : store.city,
            zip_code: zip_code ? zip_code : store.zip_code,
            state: state ? state : store.state,
            country: country ? country : store.country
        });
        res.status(200).send(store);
    } catch (err) {
        res.status(404).send(err)
    }
});

stores.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStore = await Store.destroy({
            where: {
                id
            }
        });
        if(!deletedStore) res.send("This Store doesn't exists");
        res.status(200).send("Store deleted succesfully");
    } catch (err) {
        res.status(404).send(err)
    }
});


module.exports = stores;