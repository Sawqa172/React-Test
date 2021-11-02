export enum RoleTypes {
  Professional = 'professional',
  Client = 'client',
}

export default interface Role {
  id: number;
  name: RoleTypes;
  title: string;
}
