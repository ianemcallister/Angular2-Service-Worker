export class NameListService {
  names = [
    {long:'Red Line', short:'90'},
    {long:'Blue Line', short:'100'},
    {long:'Yellow Line', short:'190'},
    {long:'Green Line', short:'200'},
    {long:'Orange Line', short:'290'}
  ];

  get(): {long: string, short: string}[] {
    return this.names;
  }
  
  /*add(value: string): void {
    this.names.push(value);
  }*/
}
