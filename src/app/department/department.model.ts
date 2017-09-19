/**
 * Created by user on 9/10/17.
 */
export class DepartmentModel {
  name: string;
  description: string;
  alias: string;
  id: number;

  constructor( id: number, nam: string, description: string, alias: string) {
    this.alias = alias;
    this.name = nam;
    this.description = description;
    this.id = id;
  }

  // printObj(){

  //   console.log(" ldgPrdDescYrNo : " + this.ldgPrdDescYrNo +" tsdId : " + this.tsdId

  //   + " fltrId : " + this.fltrId + " fltrtypId : " + this.fltrTypId + " tsdName : " + this.tsdNam);

  // }



}
