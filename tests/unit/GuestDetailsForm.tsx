import RegistrationStore, { GuestInfo } from '../../stores/RegistrationStore';
import React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '../../components/FormLabel';
import { Checkbox, Divider, FormControlLabel } from '@mui/material';
import { withTranslation, WithTranslation } from 'react-i18next';
import { inject, observer } from 'mobx-react';
import { DateValidator, TextValidator, CountrySelect } from '@hotelbuddy/shared';
import { addYears } from 'date-fns';
import { CountryData } from 'react-phone-input-2';
import { PhoneValidator, PhoneValidatorErrorCheck } from './PhoneValidator';

export interface GuestInfoFormProps {
  guestInfo: GuestInfo;
  guestLabel: string;
  index: number;
  isLast?: boolean;
  registrationStore?: RegistrationStore;
  phone?: string;
}

@inject('registrationStore')
@observer
class GuestInfoForm extends React.Component<
  GuestInfoFormProps & WithTranslation,
  {
    phone: string;
    selectedCountryCode: string;
    isCountryChanged: boolean;
    isValidPhoneNumber: boolean;
  }
> {
  constructor(props: any) {
    super(props);

    const { guestInfo } = this.props;

    this.state = {
      phone: '',
      selectedCountryCode: 'EST',
      isCountryChanged: false,
      isValidPhoneNumber: false
    };
  }

  handleDateChange(date: Date): void {
    const { registrationStore, index } = this.props;
    registrationStore.handleFieldChange(index, 'birthday', date);
  }

  handleDateOpen(): void {
    const {
      guestInfo: { birthday }
    } = this.props;

    if (!birthday) {
      this.handleDateChange(addYears(new Date(), -30));
    }
  }

  handleCountryChange(country: string, field: string) {
    const { registrationStore, index } = this.props;
    registrationStore.handleFieldChange(index, field, country);
  }

  render() {
    const { guestInfo, t, guestLabel, index, isLast, registrationStore } = this.props;
    return (
      <Grid
        id="personal-info"
        container
        spacing={3}
        direction="column"
        className={`padding-top-${index === 0 ? '96' : '8'}`}
      >
        <Grid item className="subtitle">
          <span className="subtitle-label">{guestLabel}</span>
        </Grid>
        <Grid
          id="personal-info"
          container
          spacing={3}
          direction="column"
          className="padding-top-20"
        >
          <Grid item>
            <FormLabel
              iconClass="ri-user-line ri-lg"
              label={t('guestDetails.labels.personalInfo')}
            />
          </Grid>
          <Grid item className="form-item">
            <TextValidator
              required
              label={t('guestDetails.labels.firstName')}
              type="text"
              name="firstName"
              onChange={(event: any) =>
                registrationStore.handleFieldChange(index, 'firstName', event.target.value)
              }
              value={guestInfo.firstName || ''}
              validators={['isRequired', 'maxStringLength: 100']}
              errorMessages={[
                `${t('validations.required')}`,
                `${t('validations.maxLength', { max: 100 })}`
              ]}
            />
          </Grid>
          <Grid item className="form-item">
            <TextValidator
              required
              label={t('guestDetails.labels.lastname')}
              type="text"
              name="lastName"
              onChange={(event: any) =>
                registrationStore.handleFieldChange(index, 'lastName', event.target.value)
              }
              value={guestInfo.lastName || ''}
              validators={['isRequired', 'maxStringLength: 100']}
              errorMessages={[
                `${t('validations.required')}`,
                `${t('validations.maxLength', { max: 100 })}`
              ]}
            />
          </Grid>
          <Grid item className="form-item">
            <DateValidator
              name={''}
              openTo="year"
              views={['year', 'month', 'day']}
              value={guestInfo.birthday}
              onOpen={this.handleDateOpen.bind(this)}
              onChange={this.handleDateChange.bind(this)}
              label={t('guestDetails.labels.birthday')}
              t={t}
              required
              validators={['isRequired', 'isDate']}
              errorMessages={[`${t('validations.required')}`, `${t('validations.dateFormat')}`]}
            />
          </Grid>
          <Grid item className="form-item">
            <CountrySelect
              id={`country-select-citizenship-${index}`}
              object={guestInfo}
              name="citizenship"
              onChange={this.handleCountryChange.bind(this)}
              label={t('guestDetails.labels.citizenship')}
              required={true}
            />
          </Grid>
          <Grid item className="form-item">
            <CountrySelect
              object={guestInfo.address}
              id={`country-select-address-${index}`}
              name="country"
              onChange={(country: string, field: string) => {
                this.handleCountryChange(country, field);
                this.setState({
                  ...this.state,
                  selectedCountryCode: country == null ? 'EST' : country,
                  isCountryChanged: true
                });
              }}
              label={t('guestDetails.labels.countryOfResidence')}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid id="contact-info" container spacing={3} direction="column" className="padding-top-16">
          <Grid item>
            <FormLabel
              iconClass="ri-mail-add-line ri-lg"
              label={t('guestDetails.labels.contactInfo')}
            />
          </Grid>
          <Grid item className="padding-top-4 padding-bottom-4">
            <span className="regular-14">{t('guestDetails.descriptions.product')}</span>
          </Grid>
          <Grid item className="form-item">
            <div style={{ display: 'none' }}>
              <PhoneValidatorErrorCheck
                isValidPhoneNumber={this.state.isValidPhoneNumber.toString()}
              />
            </div>

            <PhoneValidator
              name="phone"
              country={this.state.selectedCountryCode}
              value={guestInfo.phoneNumber}
              containerClass={'country-code-input-container'}
              inputClass={'country-code-input'}
              enableSearch={true}
              autoCompleteSearch={true}
              countryCodeEditable={true}
              disableCountryCode={false}
              placeholder={t('guestDetails.labels.phone')}
              label={t('guestDetails.labels.phone')}
              errorMessage={t('validations.wrongPhoneFormat')}
              isDefaultCountryChanged={this.state.isCountryChanged}
              onValidPhoneEntered={(value: string, data: CountryData | {}) => {
                registrationStore.handleFieldChange(index, 'phoneNumber', `+${value}`);
              }}
              onError={(val: boolean) => {
                if (this.state.isValidPhoneNumber !== val) {
                  this.setState({ ...this.state, isValidPhoneNumber: val });
                }
              }}
            />
          </Grid>

          <Grid item className="form-item">
            <TextValidator
              required
              label={t('guestDetails.labels.email')}
              name="email"
              type="text"
              onChange={(event: any) =>
                registrationStore.handleFieldChange(index, 'email', event.target.value)
              }
              value={guestInfo.email || ''}
              validators={['isRequired', 'containsUmlauts', 'isEmail', 'maxStringLength: 100']}
              errorMessages={[
                `${t('validations.required')}`,
                `${t('validations.containsUmlauts')}`,
                `${t('validations.emailFormat')}`,
                `${t('validations.maxLength', { max: 100 })}`
              ]}
            />
          </Grid>
          <Grid item className="form-item">
            <FormControlLabel
              control={
                <Checkbox
                  checked={guestInfo.marketingAllowed}
                  onChange={(event: any) =>
                    registrationStore.handleFieldChange(
                      index,
                      'marketingAllowed',
                      event.target.checked
                    )
                  }
                />
              }
              label={t('guestDetails.descriptions.marketing')}
            />
          </Grid>
        </Grid>
        {this.renderAddressInfo()}
        {!isLast && <Divider variant="middle" />}
      </Grid>
    );
  }

  private renderAddressInfo = () => {
    const { guestInfo, t, registrationStore, index } = this.props;
    return (
      guestInfo.isMainGuest && (
        <>
          <Grid id="address" container spacing={3} direction="column" className="padding-top-8">
            <Grid item className="padding-bottom-0">
              <FormLabel
                iconClass="ri-home-2-line ri-lg"
                label={t('guestDetails.labels.address')}
              />
            </Grid>
            <Grid item className="form-item">
              <TextValidator
                required
                label={t('guestDetails.labels.homeAddress')}
                name="address"
                type="text"
                onChange={(event: any) =>
                  registrationStore.handleFieldChange(index, 'address', event.target.value)
                }
                value={guestInfo.address.address || ''}
                validators={['isRequired', 'maxStringLength: 100']}
                errorMessages={[
                  `${t('validations.required')}`,
                  `${t('validations.maxLength', { max: 100 })}`
                ]}
              />
            </Grid>
            <Grid item className="form-item">
              <TextValidator
                required
                label={t('guestDetails.labels.city')}
                name="city"
                type="text"
                onChange={(event: any) =>
                  registrationStore.handleFieldChange(index, 'city', event.target.value)
                }
                value={guestInfo.address.city || ''}
                validators={['isRequired', 'maxStringLength: 50']}
                errorMessages={[
                  `${t('validations.required')}`,
                  `${t('validations.maxLength', { max: 50 })}`
                ]}
              />
            </Grid>
          </Grid>
        </>
      )
    );
  };
}

export default withTranslation()(GuestInfoForm);
