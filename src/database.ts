// import { TProduct, TPurchase, TUser, ProductCategory } from "./types";


// export const users: TUser[] = [
//     {
//         id: 'Pedro',
//         email: 'pedromagno999@gmail.com',
//         password: 'senha1'
//     },
//     {
//         id: 'Juliana',
//         email: 'julianajuliana5509@gmail.com',
//         password: 'senha2'
//     }]

// export const products: TProduct[] = [
//     {
//         id: '00',
//         name: 'Fender Strato',
//         price: 5000,
//         category: ProductCategory.ELETRIC,
//     },
//     {
//         id: '01',
//         name: 'Gibson g45',
//         price: 7000,
//         category: ProductCategory.ACOUSTIC,
//     }]

// export const purchases: TPurchase[] = [
//     {
//         userId: 'Pedro',
//         productId: '00',
//         quantity: 2 ,
//         totalPrice: 10000,
//     },

//     {
//         userId: 'Pedro',
//         productId: '01',
//         quantity: 2 ,
//         totalPrice: 14000,
//     },

//     ]

//     export function createUser(id:string, email:string, password:string):string{
//         users.push({id, email, password})
//         return "Cadastro realizado com sucesso!!!"
//     }

//     export function getAllUsers():TUser[]{
//         return users

//     }

//     export function createProduct(id:string, name:string, price:number, category:string):string{
//         products.push({id, name, price, category})
//         return "Produto criado com sucesso!!!"
//     }

//     export function getAllProducts():TProduct[]{
//         return products
//     }

//     export function getProductById(idToSearch:string):TProduct | undefined {
//         return products.find((product) => product.id === idToSearch)


//     }

//     export const queryProductsByName = (q: string): TProduct[] => {
//         return products.filter((product) => product.name.toLowerCase().includes(q.toLowerCase()))
//     }

    
//     export const createPurchase = ( userId:string, productId:string, quantity:number, totalPrice:number):string => {
//         purchases.push({userId, productId, quantity, totalPrice})
//         return "Compra realizada com sucesso!!!"
//     }

//     export const getAllPurchasesFromUserId = (userIdToSearch: string): TPurchase[] => {
//         return purchases.filter((purchases) => purchases.userId === userIdToSearch)
//     }
    