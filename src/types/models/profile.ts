export default interface Profile {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
  country: string;
  city: string;
  phone?: string;
  aboutMe: string;
  roleId: number;
}
