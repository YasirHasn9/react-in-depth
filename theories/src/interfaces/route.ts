// this is what we are going to use for react router

export default interface IRoute {
    path:string;
    // the name is the actual name of the page
    name:string;
    exact:boolean;
    component:any;
    props?:any;
}