import CallIcon from 'components/icons/Call';
import MailIcon from 'components/icons/Mail';

const iconsCollection = {
  phone: CallIcon,
  email: MailIcon,
};

const contacts = [
  {
    data: [],
    key: "phone",
    status: true,
    value: "+38 090 000 00 00"
  },
  {
    data: [],
    key: "email",
    status: true,
    value: "ttt@ttt.com"
  },
];

export { iconsCollection, contacts };
