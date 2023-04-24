// import { users, 
//         products, 
//         purchases, 
//         createUser, 
//         getAllUsers, 
//         createProduct, 
//         getAllProducts, 
//         getProductById, 
//         queryProductsByName, 
//         createPurchase, 
//         getAllPurchasesFromUserId } from "./database"
import { ProductCategory, TProduct, TPurchase, TUser } from "./types"
import  express, { Request, Response }  from "express"
import cors from 'cors'
import { db } from "./Database/knex";
import knex from 'knex';


// console.table(users)
// console.table(products)
// console.table(purchases)
// console.table(createUser("02" , "teste@teste.com" , "senha"))
// console.table(getAllUsers())
// console.table(createProduct("p004", "Monitor HD", 800, ProductCategory.ELETRIC))
// console.table(getAllProducts())
// console.table(getProductById("p004"))

// console.table(queryProductsByName("fen"))
// console.table(createPurchase("00", "00" , 2 , 1000 ))
// console.table(getAllPurchasesFromUserId( "00" ))

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
  });

//   app.get ("/users", (req: Request, res: Response) => {
//     try {
//         const user = getAllUsers();
//         res.status(200).send(user);
//     } catch (error:any) {
//         res.status(500);
//         res.send(error.message);
//     }  
// });


// app.get ("/products", (req: Request, res: Response) => {
//     try {
//         const product = getAllProducts();
//         res.status(200).send(product);
//     }catch (error) {
//         res.status(500);
//     }
// });

// app.get('/products/search', (req: Request, res: Response) =>{
//     try {
//     const q =req.query.q as string;
//     if (!q || q.trim().length < 1) {
//         throw new Error("Query param 'q' deve retornar pelo menos 1 caractere");
//     }
//     const result: TProduct[] = products.filter((products) =>
//         products.name.toLocaleLowerCase().includes(q.toLocaleLowerCase()));
//         res.status(200).send(result);
//     } catch (error:any){
//     res.status(500).send(error.message); 
//     }  
// });

// app.post('/users', (req: Request, res: Response) =>{
//     try {
//         const id: string = req.body.id;
//         const email: string = req.body.email;
//         const password: string = req.body.password;
//         if (!id || !email || !password) {
//             throw new Error(
//             "O corpo da requição deve conter os cos 'id', 'email' e 'password'"
//             );
//         }
//         const userExist = users.find(
//             (user) => user.id === id || user.email === email
//         );
    
//         if (userExist) {
//             throw new Error(
//             "Não é possível criar mais de uma conta com o mesmo ID ou Email"
//             );
//         }
//         const newUser: TUser = {
//             id,
//             email,
//             password,
//         };
//         users.push(newUser);
//         res.status(201).send("Cadastro realizado com sucesso");
//         } catch (error:any) {
//         res.status(500).send(error.message);
//         }
// });

// app.post('/products', (req: Request, res: Response) =>{
//     try {
//         const id: string = req.body.id;
//         const name: string = req.body.name;
//         const price: number = req.body.price;
//         const category: string = req.body.category;
//         if (!id || !name || !price || !category) {
//             res.status(422) 
//             throw new Error("Product deve ter 'id', 'nome', 'price' e uma 'catgory'");
           
//         }
//         const productExist = products.find((product) => product.id === id);
//         if (productExist) {
//             res.status(422)
//             throw new Error("Não é possível add um produto com o mesmo 'id'");
//         }
//         const newProduct: TProduct = {
//             id,
//             name,
//             price,
//             category,
//         };
//         products.push(newProduct);
//         res.status(201).send("Produto cadastrado com sucesso");
//         } catch (error:any) {
//         res.send(error.message);
//         }
// });


// app.post('/purchases', (req: Request, res: Response) =>{
//     try {
//         const userId: string = req.body.userId;
//         const productId: string = req.body.productId;
//         const quantity: number = req.body.quantity;
//         const totalPrice: number = req.body.totalPrice;
        
//         if(!userId || !productId || !quantity || !totalPrice){
//             throw new Error("A compra  deve ter  'id' do usuario, 'id' do produto, 'quantidade' e o 'preço total'");
//         }
       
//         const usuarioCadastrado = users.find((item)=> item.id === userId)
//         if(!usuarioCadastrado ){
//             throw new Error("Usuario não cadastrado")
//         }
        
//         const produtroCadastro = products.find((prod) => prod.id === prod.id)
//         if(!produtroCadastro){
//             throw new Error ("Produto não cadastrado")
//         }
        
//         const price = products.find((prod)=> prod.id === productId)?.price
//         if(!price){
//             throw new Error ("Preço não encontrado para o produto")        
//         }
//         console.log(price)
    
//         const calculateTotalPrice = quantity * price;
//         if (totalPrice !== calculateTotalPrice) {
//             throw new Error("o Preço total calculado está incorreto")
//         }
    
//         const newPurchase: TPurchase = {
//             userId,
//             productId,
//             quantity,
//             totalPrice,
//         };
//         purchases.push(newPurchase);
//         res.status(201).send("Compra realizada com sucesso");
//         }catch{}
//     });

// app.get('/products/:id', (req: Request, res: Response) =>{
//     try {
//         const id:string = req.params.id;
//         const productsById = products.find((prod)=> prod.id === id);  
        
//         if (!productsById) {throw new Error("Produto não encontrado");
//     }
//         res.status(200).send(productsById);
//     } catch (error:any) {
//         res.status(404).send(error.message);
//     }
// })


// app.get('/users/:id/purchases', (req: Request, res: Response) => {
//     try {
//         const userId:string = req.params.id;
//         const getUserPurchasesByUserId: TPurchase[] = purchases.filter((purch)=> purch.userId === userId);    
//         if (getUserPurchasesByUserId.length === 0) {
//             throw new Error("Usuário não encontrado");
//         }
//         res.status(200).send(getUserPurchasesByUserId);
//     } catch (error:any) {
//         res.status(404).send(error.message);
//     }
// })
  

// app.delete('/users/:id' , (req: Request, res: Response) =>{
//     try {
//         const id: string = req.params.id;
//         const usersIndex: number = users.findIndex((user)=>user.id === id)
//         if(usersIndex < 0) {
//             throw new Error("Usuário não encontrado");
//         }
//         users.splice(usersIndex, 1)
//         res.status(200).send("Usuário apagado com sucesso");
//     } catch (error:any) {
//         res.status(404).send(error.message);
//     }
// })

// app.delete('/products/:id' , (req: Request, res: Response) =>{
//     try {
//         const id: string = req.params.id;
//         const producstIndex: number = products.findIndex((product)=>product.id === id)
//         if(producstIndex < 0) {
//             throw new Error("Produto não encontrado");
//         }
//         products.splice(producstIndex, 1)
//         res.status(200).send("Produto deletado com sucesso");
//     } catch (error:any) {
//         res.status(404).send(error.message);
//     }
// })

// app.put('/users/:id' ,  (req: Request, res: Response) =>{
//     try {
//         const id: string = req.params.id
//         const editUserById = users.find((user) => user.id === id);
    
//         if (!editUserById) {
//             throw new Error("Usuário não encontrado")
//         }
    
//         const newEmail = req.body.email as string | undefined
//         const newPassword = req.body.password as string | undefined
    
//         if (!newEmail && !newPassword) {
//             throw new Error("Nenhum campo foi enviado para atualização")
//         }
    
//         if (newEmail) {
//             editUserById.email = newEmail
//         }
    
//         if (newPassword) {
//             editUserById.password = newPassword
//         }
    
//         res.status(200).send("Cadastro atualizado com sucesso")
//         } catch (error:any) {
//         console.log(error)
//         res.status(404).send(error.message)
//         }
//     })
// app.put('/products/:id' ,  (req: Request, res: Response) =>{
//     try {
//         const id: string = req.params.id;
//         const productIndex: number = products.findIndex((product)=>product.id === id)
//         if(productIndex < 0) {
//             throw new Error("Produto não encontrado");
//         }
//         const newProduct: TProduct = req.body;
//         if(!newProduct.id || !newProduct.name || !newProduct.price || !newProduct.category){
//             throw new Error('Preencha todos os campos do produto!');
//         }
//         products[productIndex] = newProduct;
//         res.status(200).send("Produto atualizado com sucesso");
//     } catch (error:any) {
//         res.status(404).send(error.message);
//     }
// })

//intro-knex//

// app.get("/users", async(req: Request, res: Response) =>{
//     try {
//       const result = await db.raw('SELECT * FROM users;')
//         res.status(200).send({result})
//     } catch (error: any) {
//         res.status(400).send(error.message)
//     }
// })

//Get All Products
app.get("/products", async(req: Request, res: Response) =>{

    try {
    const result = await db.raw('SELECT * FROM products;')
    res.status(200).send({result})
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

//Get All Products by name
app.get("/products/search", async(req: Request, res: Response) =>{

    try {
    const q = req.query.name
    const result = await db.raw(`SELECT * FROM products WHERE name LIKE "${q}";`)
    res.status(200).send({result})
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})


//Recriando endpoints(users, products, purchases) endpoints
// CREATE USER
app.post("/users", async (req: Request, res: Response) => {

    try {
        const { id, name, email, password, createdAt } = req.body;

    if (!id || typeof id !== "string") {
        res.status(400);
        throw new Error("'id' deve ser do tipo 'string'");
    }

    if (!email || typeof email !== "string") {
        res.status(400);
        throw new Error("'email' deve ser do tipo 'string'");
    }

    if (!password || typeof password !== "string") {
        res.status(400);
        throw new Error("'password' deve ser do tipo 'string'");
    }

      const idExist = await db.raw(`SELECT * FROM users WHERE id = ?`, [id]);
    if (idExist.length > 0) {
        res.status(400);
        throw new Error("Já existe uma conta com esse id");
    }

    const newUser = await db.raw(
        `INSERT INTO users (id, name, email, password, createdAt) VALUES (?, ?, ?, ?, ?)`,
        [id, name, email, password, createdAt]
        );
    res.status(200).send({ message: "Cadastro realizado com sucesso!" });

    } catch (error:any) {
        res.status(400).send(error.message);
    }
    });

// CREATE PRODUCT
app.post("/products", async (req: Request, res: Response) => {

    try {
        const { id, name, price, description, imageUrl } = req.body;

    if (!id || typeof id !== "string") {
        res.status(400);
        throw new Error("'id' deve ser do tipo 'string'");
    }

    if (!name || typeof name !== "string") {
        res.status(400);
        throw new Error("'name' deve ser do tipo 'string'");
    }

    if (!price || typeof price !== "number") {
        res.status(400);
        throw new Error("'price' deve ser do tipo 'number'");
    }

    if (!description || typeof description !== "string") {
        res.status(400);
        throw new Error("'descripition' deve ser do tipo 'string'");
    }

      const idExist = await db.raw(`SELECT * FROM products WHERE id = ?`, [id]);
    if (idExist.length > 0) {
        res.status(400);
        throw new Error("Já existe um produto com esse id");
    }

    const newProduct = await db.raw(
        `INSERT INTO products (id, name, price, description, imageUrl) VALUES (?, ?, ?, ?, ?)`,
        [id, name, price, description, imageUrl]
    );
    res.status(200).send({ message: "Cadastro realizado com sucesso!" });

    } catch (error:any) {
    res.status(400).send(error.message);
    }
});


//CREATE PURCHASE

app.post("/purchases", async (req: Request, res: Response) =>{
    try {
        const { id, buyer, totalPrice, createdAt, paid } = req.body;
        console.log(id, buyer, totalPrice, paid )
    if (!id || typeof id !== "string") {
        res.status(400);
        throw new Error("'id' deve ser do tipo 'string'");
    }
    if (isNaN(totalPrice) ) {
        res.status(400);
        throw new Error("'o preço deve ser no formato de numeros'");
    }
    const idExist = await db.raw(`
      SELECT * FROM purchases WHERE id = "${id}";
    `)
    if (idExist.length) {
        res.status(400);
        throw new Error("Já existe um um produto com esse id");
    }
    const newPuchases = await db.raw(`
    INSERT INTO purchases(id, buyer, totalPrice, paid)
    VALUES ("${id}", "${buyer}", "${totalPrice}", "${paid}");`);
    res.status(201).send({message: "Compra cadastrada com sucesso"});
    } catch (error:any) {
        res.status(400).send(error.message);
    }
});

  
//////////// aprofundamento knex ///////////


app.get("/users", async(req: Request, res: Response) =>{
    try {
        const result = await db.select("*").from("users")
        res.status(200).send({result})
    } catch (error: any) {
        res.status(400).send(error.message)
    }
    })

app.get("/products", async(req: Request, res: Response) =>{

    try {
        const result = await db.select("*").from("products")
        res.status(200).send({result})
    } catch (error: any) {
        res.status(400).send(error.message)
    }
    })

// app.get("/products/search", async(req: Request, res: Response) =>{
//     try {
//         const q = req.query.name
//         const result = await db.select("*").from("products").where("name", "LIKE", `%${q}%`)
//         res.status(200).send({result})
//     } catch (error: any) {
//         res.status(400).send(error.message)
//     }
//     })


// app.get("/purchases/:id", async(req:Request, res:Response)=>{
//     try {
//         const id = req.params.id
//         const purchase = await db("purchases").where({id}).first();
//         const buyer = await db("users").where({id : purchase.buyer}).first();
//         const infoPurchaseUser = {
//         purchaseId: purchase.id,
//         totalPrice: purchase.totalPrice,
//         createdAt: purchase.createdAt,
//         paid: purchase.paid,
//         buyerId:buyer.id,
//         emailBuyer:buyer.email,
//         nameBuyer: buyer.name
//     }
//         res.status(200).send(infoPurchaseUser);
//     } catch (error: any) {
//         res.status(400).send(error.message)
        
//     }
// })

app.get("/purchases/:id", async(req: Request, res: Response) => {
    try {
        const id = req.params.id;
      // Busca a compra pelo ID
        const purchase = await db("purchases").where({id}).first();
    if (!purchase) {
        return res.status(404).send("Compra não encontrada");
    }
      // Busca o comprador pelo ID da compra
        const buyer = await db("users").where({id: purchase.buyer}).first();
    if (!buyer) {
        return res.status(404).send("Comprador não encontrado");
    }
      // Busca os produtos da compra
        const products = await db("products")
        .join("purchases_products", "purchases_products.product_id", "products.id")
        .where("purchases_products.purchase_id", id);
      // Cria o objeto com as informações da compra e do comprador
        const infoPurchaseUser = {
        purchaseId: purchase.id,
        totalPrice: purchase.totalPrice,
        createdAt: purchase.createdAt,
        paid: purchase.paid,
        buyerId: buyer.id,
        emailBuyer: buyer.email,
        nameBuyer: buyer.name,
        products: products
    };
        res.status(200).send(infoPurchaseUser);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

app.put("/products/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, price, description, imageUrl } = req.body;
      const updatedProduct = await db("products")
        .where({ id })
        .update({ name, price, description, imageUrl });
      if (updatedProduct === 0) {
        return res.status(404).send("Produto não encontrado");
      }
      res.status(200).json({ message: "Produto atualizado com sucesso" });
    } catch (error:any) {
      console.log(error.message);
      res.status(400).send(error.message);
    }
  });

  app.delete('/purchases/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await db('purchases')
        .where({ id })
        .del();
  
      if (result === 1) {
        res.status(200).send({ message: 'Pedido cancelado com sucesso' });
      } else {
        res.status(404).send({ error: 'Compra não encontrada' });
      }
    } catch (error) {
      res.status(500).send({ error: 'Erro ao excluir compra' });
    }
  });