const request = require("supertest");
const baseURL = "http://localhost:3000";

describe("User Routes", () => {

    let token;
    beforeAll((done) => {
      request(baseURL)
        .post('/login')
        .send({
            "senha": "12345678",
            "email":"leone@gmail.com",
        })
        .end((err, response) => {
          userId = response.body.id;
          token = response.body.token; // save the token!
          done();
        });
    });
   

   // Deve ser possivel criar um cliente
    it("Deve ser possivel criar um cliente", async () => {

        const newUser = await request(baseURL)
        .post('/criar_cliente')
        .send({
            "nome":"Arnaldo",
            "cnpj":"123456789",
            "email":"arnaldinho@gmail.com",
            "senha":"123456"
        });
    });
    // dever ser possivel fazer login
    it("deve ser possivel fazer login", async () => {
        const user = await request(baseURL)
        .post('/login')
        .send({
            "email":"leone@gmail.com",
            "senha":"12345678"
            });

        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
    });
     //deve ser possivel criar um usuario
    // it("Deve ser possivel criar um usuario", async () => {
      
    //     const user = await request(baseURL)
    //     .post('/cliente/criar_usuario')
    //     .set('Authorization', `Bearer ${token}`)
    //     .send({
    //         "nome":"crislanssss",
    //         "email": "crislassnss@gmail.com",
    //         "senha": "123456782"
    //     })
    //     expect(user.statusCode).toBe(200);
    //     expect(user).not.toBeNull();
    // });

    
    //deve ser possivel  buscar seus usario
    it("deve ser possivel buscar seus usuario", async () => {
      
        const user = await request(baseURL)
        .get('/cliente/buscar_usuario')
        .set('Authorization', `Bearer ${token}`)

        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
    });

    //deve ser possivel  alterar seus dados
    it("deve ser possivel altera os seus dados", async () => {
      
        const user = await request(baseURL)
        .put('/atualizar_cliente/'+`${userId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
            "nome":"moises",
            "senha": "12345678",
            "email": "moises@gmail.com",
            "cnpj": "121313131313"
        });
        expect(user.statusCode).toBe(400);
        expect(user).not.toBeNull();
    });
    //deve ser possivel apagar seus dados

    it("deve ser possivel apagar seus dados", async () => {
        const user = await request(baseURL)
        .delete('/deletar_cliente/'+`${userId}`)
        .set('Authorization', `Bearer ${token}`)
        expect(user.statusCode).toBe(404);
        expect(user).not.toBeNull();
    });
    //buscar dados
    it("deve ser possivel buscar seus dados(cliente)", async () => {
      
        const user = await request(baseURL)
        .get('/buscar_cliente')
        .set('Authorization', `Bearer ${token}`)

        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
    });

   // equipamentos
    // it("deve ser possivel criar um equipamentos", async () => {
      
    //     const user = await request(baseURL)
    //     .post('/cliente/criar_equipamento')
    //     .set('Authorization', `Bearer ${token}`)
    //     .send({
    //         "nome_equipamento":"altersssssssss",      
    //     });

    //     expect(user.statusCode).toBe(200);
    //     expect(user).not.toBeNull();
    // });

 //buscar equipamento
    it("deve ser possivel buscar seus equipamentos", async () => {
      
        const user = await request(baseURL)
        .get('/cliente/buscar_equipamento')
        .set('Authorization', `Bearer ${token}`)

        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
    });



    //Treino
    it("Deve ser possivel criar um usuario", async () => {
      
        const user = await request(baseURL)
        .post('/cliente/criar_treino')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "repeticoes":12,
            "treino": "pernas",
            "nome_usuario": "crislan",
            "nome_equipamento":"ABDUTOR - LS122",
            "series": 12,
            "dia": 1,

        })
        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
    });
    //buscar treino
    it("deve ser possivel buscar seus treinos", async () => {
      
        const user = await request(baseURL)
        .get('/cliente/buscar_treino')
        .set('Authorization', `Bearer ${token}`)
        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
    });

    //buscar treino usuario
    it("deve ser possivel buscar seus treinos (usuario)", async () => {
        const user = await request(baseURL)
        .get('/treino_usuario/baiano212')
        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
    });
    
   
});