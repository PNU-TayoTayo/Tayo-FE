interface IssuingVC{
    carNumber: string;
    walletPassword: string;
}
interface CarVC{
    referent: string;
    name: string;
    carModel: string;
    carNumber: string;
    carFuel: string;
    carDeliveryDate: string;
    inspectionRecord: string;
    drivingRecord: string;
}
interface RegisterCar{
    walletPassword:string,
    referentVC:string,
    location:{
    sharingLocation:string,
        sharingLocationAddress: string,
        sharingLatitude:"35.23258237080505",
        sharingLongitude:"129.0828602625644"
    },
    sharingPrice:string,
    timeList:string[],
}
