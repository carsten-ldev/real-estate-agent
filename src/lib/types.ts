export type Image = {
    name: string,
    url: string,
    width: number,
    height: number
}

export type Property = {
    id: string,
    type: string,
    energylabel: string,
    adress1: string,
    adress2: string, 
    postalcode: number,
    city: string,
    description: string
    rooms: number,
    price: number
    images: Image[],
    floorplan: Image,
    built: number,
    remodel: number,
    livingspace: number,
    basementsize: number,
    lotsize: number,
    payment: number,
    gross: number,
    netto: number,
    cost: number,
    lat: number,
    long: number,
    agent: Agent
}

export type Agent = {
    id: string,
    name: string,
    title: string,
    phone: string,
    email: string,
    description: string,
    image: Image
}