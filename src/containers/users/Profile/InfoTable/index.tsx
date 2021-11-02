// core
import React from 'react';

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// types
import { Props } from './types';

// styles
import {
  Table,
  TableBody,
  TableRow,
  TableKeyCell,
  TableValueCell,
} from './styles';

export default function InfoTable({ ...info }: Props) {
  // locales hook
  const { t } = useTranslation();

  // render
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableKeyCell>
            {t(translations.containers.profile.info.fullName)}
          </TableKeyCell>
          <TableValueCell>
            {info.firstName} {info.lastName}
          </TableValueCell>
        </TableRow>

        <TableRow>
          <TableKeyCell>
            {t(translations.containers.profile.info.phone)}
          </TableKeyCell>
          <TableValueCell>
            {info.phone && info.phone.length > 0 ? info.phone : '-'}
          </TableValueCell>
        </TableRow>

        <TableRow>
          <TableKeyCell>
            {t(translations.containers.profile.info.email)}
          </TableKeyCell>
          <TableValueCell>
            {info.email && info.email.length > 0 ? info.email : '-'}
          </TableValueCell>
        </TableRow>

        <TableRow>
          <TableKeyCell>
            {t(translations.containers.profile.info.country)}
          </TableKeyCell>
          <TableValueCell>
            {info.country && info.country.length > 0 ? info.country : '-'}
          </TableValueCell>
        </TableRow>

        <TableRow>
          <TableKeyCell>
            {t(translations.containers.profile.info.city)}
          </TableKeyCell>
          <TableValueCell>
            {info.city && info.city.length > 0 ? info.city : '-'}
          </TableValueCell>
        </TableRow>

        <TableRow>
          <TableKeyCell>
            {t(translations.containers.profile.info.aboutMe)}
          </TableKeyCell>
          <TableValueCell>
            {info.aboutMe && info.aboutMe.length > 0 ? info.aboutMe : '-'}
          </TableValueCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
