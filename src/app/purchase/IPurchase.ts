import {IProducts} from "../product/IProducts";
export interface IPurchase{
    PId:number;
    PName:string;
    PDate:string;
    PVendorName : string;
    PItems: IProducts[];

}