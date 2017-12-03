export interface IWebsite {
    id: number,
    name: string,
    description: string,
    createdDate: Date,
    createdTime: string,
    membershipFee: number,
    imageUrl: string,
    ownerAddress?: {
        address: string,
        city: string,
        country: string
    },
    onlineUrl?:string,
    employees: IEmployee[]
}
export interface IEmployee {
    id: number,
    name: string,
    title: string,
    years: number,
    level: string,
    bio: string,
    mentors: string[]

}
