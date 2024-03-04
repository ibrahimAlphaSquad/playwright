import React, { createRef } from 'react';
import 'react-phone-input-2/lib/material.css';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import { isPossibleNumber, parsePhoneNumber } from 'libphonenumber-js';
import codes from 'country-calling-code';
import { TextField } from '@mui/material';
import { ValidatorComponent, ValidatorForm } from 'react-form-validator-core';

export interface IPhoneValidatorProps {
  name: string;
  country: string;
  value: string;
  containerClass?: string;
  inputClass?: string;
  enableSearch?: boolean;
  countryCodeEditable?: boolean;
  disableCountryCode?: boolean;
  autoCompleteSearch?: boolean;
  placeholder?: string;
  label: string;
  errorMessage: string;
  isDefaultCountryChanged: boolean;
  onChange?: Function;
  onValidPhoneEntered?: Function;
  onError?: Function;
}

export class PhoneValidator extends React.Component<
  IPhoneValidatorProps,
  {
    countryCode: string;
    prevCountryCode: string;
    dialCode: string;
    phoneNumber: string;
    isValidPhoneNumber: boolean;
    isPhoneInputChanged: boolean;
  }
> {
  phoneInputElementRef = createRef<HTMLDivElement>();

  constructor(props: any) {
    super(props);
    this.setPhoneInputState();
  }

  componentDidMount() {
    this.setPhoneInputLabel();
  }

  componentDidUpdate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prevProps: Readonly<IPhoneValidatorProps>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prevState: Readonly<{
      countryCode: string;
      dialCode: string;
      phoneNumber: string;
      isValidPhoneNumber: boolean;
      isPhoneInputChanged: boolean;
    }>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    snapshot?: any
  ) {
    this.setPhoneInputLabel();
    this.setPhoneInputState(true);
  }

  setPhoneInputState(isUpdateState: boolean = false): void {
    const { country, isDefaultCountryChanged } = this.props;
    let { value } = this.props;
    value = this.trimPhoneNumber(value);
    let isValidPhoneNumber = this.checkIsValidPhoneNumber(value);

    let dialCode: number | string = '';
    let countryCode: string = '';
    let phoneNumber: string = '';

    if (!this.state || (isUpdateState && isDefaultCountryChanged)) {
      const setStateData = () => {
        const data = this.getPhoneInputStateData(country, value);
        countryCode = data.countryCode;
        dialCode = data.dialCode;
        phoneNumber = data.phoneNumber;
      };
      setStateData();

      if (isDefaultCountryChanged) {
        const countryDetails = this.getCountryDetailsByISO3Code(country);
        dialCode = `+${countryDetails?.countryCodes[0]}`;
        value = this.trimPhoneNumber(dialCode + phoneNumber);
        isValidPhoneNumber = this.checkIsValidPhoneNumber(value);
        setStateData();
      }
    }

    if (isUpdateState && isDefaultCountryChanged) {
      if (this.state.prevCountryCode !== this.props.country) {
        this.setState({
          ...this.state,
          prevCountryCode: this.props.country,
          countryCode,
          dialCode,
          phoneNumber,
          isValidPhoneNumber,
          isPhoneInputChanged: false
        });
      }
    } else if (!this.state) {
      this.state = {
        countryCode,
        prevCountryCode: countryCode,
        dialCode,
        phoneNumber,
        isValidPhoneNumber,
        isPhoneInputChanged: false
      };
    }
  }

  getPhoneInputStateData(
    country: string,
    phoneNumber: string
  ): { countryCode: string; dialCode: string; phoneNumber: string } {
    const isValidPhoneNumber = this.checkIsValidPhoneNumber(phoneNumber);
    let dialCode: number | string = '';
    let countryCode: string = '';
    let phoneNumberWithoutCode: string = '';

    if (!isValidPhoneNumber) {
      phoneNumberWithoutCode = phoneNumber.split('+')[1]; // should be without plus
      if (country) {
        const countryDetails = this.getCountryDetailsByISO3Code(country);
        dialCode = `+${countryDetails?.countryCodes[0]}`;
        countryCode = countryDetails?.isoCode2.toLowerCase();
      }
    }

    if (isValidPhoneNumber) {
      const phoneNumberDetails = parsePhoneNumber(phoneNumber);
      dialCode = phoneNumberDetails.countryCallingCode;
      countryCode = phoneNumberDetails.country.toLowerCase();
      phoneNumberWithoutCode = phoneNumberDetails.nationalNumber;
    }

    return { countryCode, dialCode, phoneNumber: phoneNumberWithoutCode };
  }

  getCountryDetailsByISO3Code(isoCode3: string): {
    country: string;
    countryCodes: Array<string>;
    isoCode2: string;
    isoCode3: string;
  } {
    return codes.find((code) => code.isoCode3 === isoCode3);
  }

  trimPhoneNumber(phoneNumber: string): string {
    const isHasPlusSign = phoneNumber.includes('+');
    return isHasPlusSign ? phoneNumber : `+${phoneNumber.replace(/\s+/g, '')}`;
  }

  checkIsValidPhoneNumber(phoneNumber: string): boolean {
    return isPossibleNumber(this.trimPhoneNumber(phoneNumber));
  }

  setPhoneInputLabel(): void {
    if (this.phoneInputElementRef) {
      const span = document.createElement('span');
      span.textContent = '*';
      span.style.color = '#FC3A2C';
      span.style.paddingLeft = '1.5px';
      this.phoneInputElementRef.current.querySelector('.special-label').textContent =
        this.props.label;
      this.phoneInputElementRef.current.querySelector('.special-label').append(span);
    }
  }

  render(): JSX.Element {
    const {
      containerClass,
      inputClass,
      label,
      errorMessage,
      onChange,
      isDefaultCountryChanged,
      onValidPhoneEntered,
      onError,
      ...rest
    } = this.props;

    return (
      <>
        <div
          ref={this.phoneInputElementRef}
          className={this.state.isValidPhoneNumber ? null : 'invalid-phone-input'}
        >
          <PhoneInput
            {...this.props}
            {...rest}
            country={this.state.countryCode}
            value={
              this.checkIsValidPhoneNumber(this.state.dialCode + this.state.phoneNumber)
                ? this.state.dialCode + this.state.phoneNumber
                : ''
            }
            onChange={(phoneNumber: string, countryData: CountryData) => {
              const isValidNumber = this.checkIsValidPhoneNumber(phoneNumber);
              this.setState({
                ...this.state,
                isValidPhoneNumber: isValidNumber,
                isPhoneInputChanged: true
              });

              if (onChange) {
                onChange(phoneNumber, countryData);
              }

              if (isValidNumber && onValidPhoneEntered) {
                onValidPhoneEntered(phoneNumber, countryData);
              }
            }}
            isValid={(phoneNumber: string) => {
              const isValidPhoneNumber = this.checkIsValidPhoneNumber(phoneNumber);
              const isValid =
                phoneNumber && this.state.isPhoneInputChanged ? isValidPhoneNumber : true;

              if (onError) {
                onError(isValid && isValidPhoneNumber);
              }

              return isValid;
            }}
          />
          {!this.state.isValidPhoneNumber && this.state.countryCode + this.state.dialCode && (
            <div className="error-message"> {errorMessage} </div>
          )}
        </div>
      </>
    );
  }
}

export class PhoneInputErrorCheckTextField extends ValidatorComponent {
  renderValidatorComponent(): JSX.Element {
    const {
      error,
      errorMessages,
      validators,
      requiredError,
      validatorListener,
      withRequiredValidator,
      isValidPhoneNumber,
      containerProps,
      ...rest
    } = this.props;

    return (
      <>
        <TextField {...rest} />
      </>
    );
  }
}

export class PhoneValidatorErrorCheck extends React.Component<
  { isValidPhoneNumber: string },
  { isValidPhoneNumber: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { isValidPhoneNumber: props.isValidPhoneNumber };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isValidPhoneNumber', (value) => {
      return value === 'true';
    });
  }

  componentWillUnmount(): void {
    ValidatorForm.removeValidationRule('isValidPhoneNumber');
  }

  componentDidUpdate(
    prevProps: Readonly<{ isValidPhoneNumber: string }>,
    prevState: Readonly<{ isValidPhoneNumber: string }>,
    snapshot?: any
  ) {
    if (this.state.isValidPhoneNumber !== this.props.isValidPhoneNumber) {
      this.setState({ ...this.state, isValidPhoneNumber: this.props.isValidPhoneNumber });
    }
  }

  render() {
    return (
      <PhoneInputErrorCheckTextField
        name={'phoneInputField'}
        value={this.state.isValidPhoneNumber}
        validators={['isValidPhoneNumber']}
        errorMessages={['is not valid phone number']}
      ></PhoneInputErrorCheckTextField>
    );
  }
}
