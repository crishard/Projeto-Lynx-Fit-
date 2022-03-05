const request = require("supertest");
const baseURL = "http://localhost:3000";

describe("User Routes usuario", () => {

    let token;
    beforeAll((done) => {
      request(baseURL)
        .post('/login')
        .send({
            "senha": "12345678",
            "email":"crislan@gmail.com",
        })
        .end((err, response) => {
          userId = response.body.id;
          tokenusuario = response.body.token; // save the token!
          done();
        });
    });
it("Deve criar medidas", async () => {
    const user = await request(baseURL)
    .post('/usuario/adicionar_medidas')
    .set('Authorization', `Bearer ${tokenusuario}`)
    .send({
        "altura": 17.8,
        "busto": 12.4,
        "peso":12.3,
        "torax":12,
        "cintura":212,
        "quadril":32.4,
        "p_gordura":"12%"
        })
        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
    })

    it("deve ser possivel altera suas medidas", async () => {
      
        const user = await request(baseURL)
        .put('/usuario/atualizar_medidas')
        .set('Authorization', `Bearer ${token}`)
        .send({
                "altura": 17.81,
                "busto": 12.41,
                "peso":12.32,
                "torax":12.2,
                "cintura":212,
                "quadril":32.4,
                "p_gordura":"20%"
        });
        expect(user.statusCode).toBe(404);
        expect(user).not.toBeNull();
    });
    //deve ser possivel busca suas medidas
    it("deve ser possivel buscar suas medidas", async () => {
      
        const user = await request(baseURL)
        .get('/usuario/ver_medidas')
        .set('Authorization', `Bearer ${token}`)

        expect(user.statusCode).toBe(401);
        expect(user).not.toBeNull();
    });

    //deve ser possivel buscar seus dados
    it("deve ser possivel buscar suas medidas", async () => {
      
        const user = await request(baseURL)
        .get('/usuario/dados')
        .set('Authorization', `Bearer ${token}`)

        expect(user.statusCode).toBe(401);
        expect(user).not.toBeNull();
    });

    //login usuario
    it("deve ser possivel fazer login", async () => {
        const user = await request(baseURL)
        .post('/login')
        .send({
            "email":"crislan@gmail.com",
            "senha":"12345678"
            });

        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
    });




    


})