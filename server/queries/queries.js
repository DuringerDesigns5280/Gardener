const database = require("../database-connection");


module.exports = {
    list(){
        return database('garden').select()
    },
    read(id){
        return database('garden').select().where('id', id).first()
    },
    create(resolution){
        return database('garden')
            .insert(resolution)
            .returning('*')
            .then(record => record[0])
    },
    update(id, resolution){
        return database('garden')
            .update(resolution)
            .where('id', id)
            .returning('*')
            .then(record => record[0])
    },
    delete(id){
        return database('garden').delete().where('id', id)
    }
}