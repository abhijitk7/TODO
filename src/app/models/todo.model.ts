export class Todo{
    constructor(public id:number,
        public userName:string,
        public description:string,
        public dateOfCompletion:Date,
        public isCompleted:Boolean){

    }
}