import React from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

class Settings extends React.Component {
  state = {
    activePanel: "general",
    activeTab: "generalsettings",
    data: {},
  };

  setVal = (key, val) => {
    const { data } = this.state;
    data[key] = val;
    this.setState({ data });
  };

  handleSubmit = () => {
    console.log(this.state);
  };
  tabContentToggle = () => {
    if (this.state.activePanel == "general") {
      return (
        <div className="tab-pane fade in active" id="general">
          <h3 className="tab-content-title">General</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="supported_countries[]"
                  className="col-md-3 control-label text-left"
                >
                  Supported Countries<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <select
                    name="supported_countries[]"
                    className="form-control custom-select-black selectize prevent-creation"
                    id="supported_countries[]"
                    multiple={1}
                  >
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua &amp; Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AC">Ascension Island</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD" selected>
                      Bangladesh
                    </option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BA">Bosnia &amp; Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="VG">British Virgin Islands</option>
                    <option value="BN">Brunei</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="IC">Canary Islands</option>
                    <option value="CV">Cape Verde</option>
                    <option value="BQ">Caribbean Netherlands</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="EA">Ceuta &amp; Melilla</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo - Brazzaville</option>
                    <option value="CD">Congo - Kinshasa</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Côte d’Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czechia</option>
                    <option value="DK">Denmark</option>
                    <option value="DG">Diego Garcia</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="EZ">Eurozone</option>
                    <option value="FK">Falkland Islands</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong SAR China</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="XK">Kosovo</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Laos</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macau SAR China</option>
                    <option value="MK">Macedonia</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar (Burma)</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="KP">North Korea</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territories</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn Islands</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Réunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="RW">Rwanda</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">São Tomé &amp; Príncipe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">
                      South Georgia &amp; South Sandwich Islands
                    </option>
                    <option value="KR">South Korea</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="BL">St. Barthélemy</option>
                    <option value="SH">St. Helena</option>
                    <option value="KN">St. Kitts &amp; Nevis</option>
                    <option value="LC">St. Lucia</option>
                    <option value="MF">St. Martin</option>
                    <option value="PM">St. Pierre &amp; Miquelon</option>
                    <option value="VC">St. Vincent &amp; Grenadines</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard &amp; Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syria</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad &amp; Tobago</option>
                    <option value="TA">Tristan da Cunha</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks &amp; Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UM">U.S. Outlying Islands</option>
                    <option value="VI">U.S. Virgin Islands</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="UN">United Nations</option>
                    <option value="US" selected>
                      United States
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VA">Vatican City</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="WF">Wallis &amp; Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="default_country"
                  className="col-md-3 control-label text-left"
                >
                  Default Country<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <select
                    name="default_country"
                    className="form-control custom-select-black "
                    id="default_country"
                  >
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua &amp; Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AC">Ascension Island</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BA">Bosnia &amp; Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="VG">British Virgin Islands</option>
                    <option value="BN">Brunei</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="IC">Canary Islands</option>
                    <option value="CV">Cape Verde</option>
                    <option value="BQ">Caribbean Netherlands</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="EA">Ceuta &amp; Melilla</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo - Brazzaville</option>
                    <option value="CD">Congo - Kinshasa</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Côte d’Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czechia</option>
                    <option value="DK">Denmark</option>
                    <option value="DG">Diego Garcia</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="EZ">Eurozone</option>
                    <option value="FK">Falkland Islands</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong SAR China</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="XK">Kosovo</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Laos</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macau SAR China</option>
                    <option value="MK">Macedonia</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar (Burma)</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="KP">North Korea</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territories</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn Islands</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Réunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="RW">Rwanda</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">São Tomé &amp; Príncipe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">
                      South Georgia &amp; South Sandwich Islands
                    </option>
                    <option value="KR">South Korea</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="BL">St. Barthélemy</option>
                    <option value="SH">St. Helena</option>
                    <option value="KN">St. Kitts &amp; Nevis</option>
                    <option value="LC">St. Lucia</option>
                    <option value="MF">St. Martin</option>
                    <option value="PM">St. Pierre &amp; Miquelon</option>
                    <option value="VC">St. Vincent &amp; Grenadines</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard &amp; Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syria</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad &amp; Tobago</option>
                    <option value="TA">Tristan da Cunha</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks &amp; Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UM">U.S. Outlying Islands</option>
                    <option value="VI">U.S. Virgin Islands</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="UN">United Nations</option>
                    <option value="US" selected>
                      United States
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VA">Vatican City</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="WF">Wallis &amp; Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="supported_locales[]"
                  className="col-md-3 control-label text-left"
                >
                  Supported Locales<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <select
                    name="supported_locales[]"
                    className="form-control custom-select-black selectize prevent-creation"
                    id="supported_locales[]"
                    multiple={1}
                  >
                    <option value="af">Afrikaans</option>
                    <option value="af_NA">Afrikaans (Namibia)</option>
                    <option value="af_ZA">Afrikaans (South Africa)</option>
                    <option value="ak">Akan</option>
                    <option value="ak_GH">Akan (Ghana)</option>
                    <option value="sq">Albanian</option>
                    <option value="sq_AL">Albanian (Albania)</option>
                    <option value="sq_XK">Albanian (Kosovo)</option>
                    <option value="sq_MK">Albanian (Macedonia)</option>
                    <option value="am">Amharic</option>
                    <option value="am_ET">Amharic (Ethiopia)</option>
                    <option value="ar" selected>
                      Arabic
                    </option>
                    <option value="ar_DZ">Arabic (Algeria)</option>
                    <option value="ar_BH">Arabic (Bahrain)</option>
                    <option value="ar_TD">Arabic (Chad)</option>
                    <option value="ar_KM">Arabic (Comoros)</option>
                    <option value="ar_DJ">Arabic (Djibouti)</option>
                    <option value="ar_EG">Arabic (Egypt)</option>
                    <option value="ar_ER">Arabic (Eritrea)</option>
                    <option value="ar_IQ">Arabic (Iraq)</option>
                    <option value="ar_IL">Arabic (Israel)</option>
                    <option value="ar_JO">Arabic (Jordan)</option>
                    <option value="ar_KW">Arabic (Kuwait)</option>
                    <option value="ar_LB">Arabic (Lebanon)</option>
                    <option value="ar_LY">Arabic (Libya)</option>
                    <option value="ar_MR">Arabic (Mauritania)</option>
                    <option value="ar_MA">Arabic (Morocco)</option>
                    <option value="ar_OM">Arabic (Oman)</option>
                    <option value="ar_PS">
                      Arabic (Palestinian Territories)
                    </option>
                    <option value="ar_QA">Arabic (Qatar)</option>
                    <option value="ar_SA">Arabic (Saudi Arabia)</option>
                    <option value="ar_SO">Arabic (Somalia)</option>
                    <option value="ar_SS">Arabic (South Sudan)</option>
                    <option value="ar_SD">Arabic (Sudan)</option>
                    <option value="ar_SY">Arabic (Syria)</option>
                    <option value="ar_TN">Arabic (Tunisia)</option>
                    <option value="ar_AE">Arabic (United Arab Emirates)</option>
                    <option value="ar_EH">Arabic (Western Sahara)</option>
                    <option value="ar_YE">Arabic (Yemen)</option>
                    <option value="hy">Armenian</option>
                    <option value="hy_AM">Armenian (Armenia)</option>
                    <option value="as">Assamese</option>
                    <option value="as_IN">Assamese (India)</option>
                    <option value="az">Azerbaijani</option>
                    <option value="az_AZ">Azerbaijani (Azerbaijan)</option>
                    <option value="az_Cyrl_AZ">
                      Azerbaijani (Cyrillic, Azerbaijan)
                    </option>
                    <option value="az_Cyrl">Azerbaijani (Cyrillic)</option>
                    <option value="az_Latn_AZ">
                      Azerbaijani (Latin, Azerbaijan)
                    </option>
                    <option value="az_Latn">Azerbaijani (Latin)</option>
                    <option value="bm">Bambara</option>
                    <option value="bm_Latn_ML">Bambara (Latin, Mali)</option>
                    <option value="bm_Latn">Bambara (Latin)</option>
                    <option value="eu">Basque</option>
                    <option value="eu_ES">Basque (Spain)</option>
                    <option value="be">Belarusian</option>
                    <option value="be_BY">Belarusian (Belarus)</option>
                    <option value="bn">Bengali</option>
                    <option value="bn_BD">Bengali (Bangladesh)</option>
                    <option value="bn_IN">Bengali (India)</option>
                    <option value="bs">Bosnian</option>
                    <option value="bs_BA">
                      Bosnian (Bosnia &amp; Herzegovina)
                    </option>
                    <option value="bs_Cyrl_BA">
                      Bosnian (Cyrillic, Bosnia &amp; Herzegovina)
                    </option>
                    <option value="bs_Cyrl">Bosnian (Cyrillic)</option>
                    <option value="bs_Latn_BA">
                      Bosnian (Latin, Bosnia &amp; Herzegovina)
                    </option>
                    <option value="bs_Latn">Bosnian (Latin)</option>
                    <option value="br">Breton</option>
                    <option value="br_FR">Breton (France)</option>
                    <option value="bg">Bulgarian</option>
                    <option value="bg_BG">Bulgarian (Bulgaria)</option>
                    <option value="my">Burmese</option>
                    <option value="my_MM">Burmese (Myanmar (Burma))</option>
                    <option value="ca">Catalan</option>
                    <option value="ca_AD">Catalan (Andorra)</option>
                    <option value="ca_FR">Catalan (France)</option>
                    <option value="ca_IT">Catalan (Italy)</option>
                    <option value="ca_ES">Catalan (Spain)</option>
                    <option value="zh">Chinese</option>
                    <option value="zh_CN">Chinese (China)</option>
                    <option value="zh_HK">Chinese (Hong Kong SAR China)</option>
                    <option value="zh_MO">Chinese (Macau SAR China)</option>
                    <option value="zh_Hans_CN">
                      Chinese (Simplified, China)
                    </option>
                    <option value="zh_Hans_HK">
                      Chinese (Simplified, Hong Kong SAR China)
                    </option>
                    <option value="zh_Hans_MO">
                      Chinese (Simplified, Macau SAR China)
                    </option>
                    <option value="zh_Hans_SG">
                      Chinese (Simplified, Singapore)
                    </option>
                    <option value="zh_Hans">Chinese (Simplified)</option>
                    <option value="zh_SG">Chinese (Singapore)</option>
                    <option value="zh_TW">Chinese (Taiwan)</option>
                    <option value="zh_Hant_HK">
                      Chinese (Traditional, Hong Kong SAR China)
                    </option>
                    <option value="zh_Hant_MO">
                      Chinese (Traditional, Macau SAR China)
                    </option>
                    <option value="zh_Hant_TW">
                      Chinese (Traditional, Taiwan)
                    </option>
                    <option value="zh_Hant">Chinese (Traditional)</option>
                    <option value="kw">Cornish</option>
                    <option value="kw_GB">Cornish (United Kingdom)</option>
                    <option value="hr">Croatian</option>
                    <option value="hr_BA">
                      Croatian (Bosnia &amp; Herzegovina)
                    </option>
                    <option value="hr_HR">Croatian (Croatia)</option>
                    <option value="cs">Czech</option>
                    <option value="cs_CZ">Czech (Czech Republic)</option>
                    <option value="da">Danish</option>
                    <option value="da_DK">Danish (Denmark)</option>
                    <option value="da_GL">Danish (Greenland)</option>
                    <option value="nl">Dutch</option>
                    <option value="nl_AW">Dutch (Aruba)</option>
                    <option value="nl_BE">Dutch (Belgium)</option>
                    <option value="nl_BQ">Dutch (Caribbean Netherlands)</option>
                    <option value="nl_CW">Dutch (Curaçao)</option>
                    <option value="nl_NL">Dutch (Netherlands)</option>
                    <option value="nl_SX">Dutch (Sint Maarten)</option>
                    <option value="nl_SR">Dutch (Suriname)</option>
                    <option value="dz">Dzongkha</option>
                    <option value="dz_BT">Dzongkha (Bhutan)</option>
                    <option value="en" selected>
                      English
                    </option>
                    <option value="en_AS">English (American Samoa)</option>
                    <option value="en_AI">English (Anguilla)</option>
                    <option value="en_AG">
                      English (Antigua &amp; Barbuda)
                    </option>
                    <option value="en_AU">English (Australia)</option>
                    <option value="en_BS">English (Bahamas)</option>
                    <option value="en_BB">English (Barbados)</option>
                    <option value="en_BE">English (Belgium)</option>
                    <option value="en_BZ">English (Belize)</option>
                    <option value="en_BM">English (Bermuda)</option>
                    <option value="en_BW">English (Botswana)</option>
                    <option value="en_IO">
                      English (British Indian Ocean Territory)
                    </option>
                    <option value="en_VG">
                      English (British Virgin Islands)
                    </option>
                    <option value="en_CM">English (Cameroon)</option>
                    <option value="en_CA">English (Canada)</option>
                    <option value="en_KY">English (Cayman Islands)</option>
                    <option value="en_CX">English (Christmas Island)</option>
                    <option value="en_CC">
                      English (Cocos (Keeling) Islands)
                    </option>
                    <option value="en_CK">English (Cook Islands)</option>
                    <option value="en_DG">English (Diego Garcia)</option>
                    <option value="en_DM">English (Dominica)</option>
                    <option value="en_ER">English (Eritrea)</option>
                    <option value="en_FK">English (Falkland Islands)</option>
                    <option value="en_FJ">English (Fiji)</option>
                    <option value="en_GM">English (Gambia)</option>
                    <option value="en_GH">English (Ghana)</option>
                    <option value="en_GI">English (Gibraltar)</option>
                    <option value="en_GD">English (Grenada)</option>
                    <option value="en_GU">English (Guam)</option>
                    <option value="en_GG">English (Guernsey)</option>
                    <option value="en_GY">English (Guyana)</option>
                    <option value="en_HK">English (Hong Kong SAR China)</option>
                    <option value="en_IN">English (India)</option>
                    <option value="en_IE">English (Ireland)</option>
                    <option value="en_IM">English (Isle of Man)</option>
                    <option value="en_JM">English (Jamaica)</option>
                    <option value="en_JE">English (Jersey)</option>
                    <option value="en_KE">English (Kenya)</option>
                    <option value="en_KI">English (Kiribati)</option>
                    <option value="en_LS">English (Lesotho)</option>
                    <option value="en_LR">English (Liberia)</option>
                    <option value="en_MO">English (Macau SAR China)</option>
                    <option value="en_MG">English (Madagascar)</option>
                    <option value="en_MW">English (Malawi)</option>
                    <option value="en_MY">English (Malaysia)</option>
                    <option value="en_MT">English (Malta)</option>
                    <option value="en_MH">English (Marshall Islands)</option>
                    <option value="en_MU">English (Mauritius)</option>
                    <option value="en_FM">English (Micronesia)</option>
                    <option value="en_MS">English (Montserrat)</option>
                    <option value="en_NA">English (Namibia)</option>
                    <option value="en_NR">English (Nauru)</option>
                    <option value="en_NZ">English (New Zealand)</option>
                    <option value="en_NG">English (Nigeria)</option>
                    <option value="en_NU">English (Niue)</option>
                    <option value="en_NF">English (Norfolk Island)</option>
                    <option value="en_MP">
                      English (Northern Mariana Islands)
                    </option>
                    <option value="en_PK">English (Pakistan)</option>
                    <option value="en_PW">English (Palau)</option>
                    <option value="en_PG">English (Papua New Guinea)</option>
                    <option value="en_PH">English (Philippines)</option>
                    <option value="en_PN">English (Pitcairn Islands)</option>
                    <option value="en_PR">English (Puerto Rico)</option>
                    <option value="en_RW">English (Rwanda)</option>
                    <option value="en_WS">English (Samoa)</option>
                    <option value="en_SC">English (Seychelles)</option>
                    <option value="en_SL">English (Sierra Leone)</option>
                    <option value="en_SG">English (Singapore)</option>
                    <option value="en_SX">English (Sint Maarten)</option>
                    <option value="en_SB">English (Solomon Islands)</option>
                    <option value="en_ZA">English (South Africa)</option>
                    <option value="en_SS">English (South Sudan)</option>
                    <option value="en_SH">English (St. Helena)</option>
                    <option value="en_KN">
                      English (St. Kitts &amp; Nevis)
                    </option>
                    <option value="en_LC">English (St. Lucia)</option>
                    <option value="en_VC">
                      English (St. Vincent &amp; Grenadines)
                    </option>
                    <option value="en_SD">English (Sudan)</option>
                    <option value="en_SZ">English (Swaziland)</option>
                    <option value="en_TZ">English (Tanzania)</option>
                    <option value="en_TK">English (Tokelau)</option>
                    <option value="en_TO">English (Tonga)</option>
                    <option value="en_TT">
                      English (Trinidad &amp; Tobago)
                    </option>
                    <option value="en_TC">
                      English (Turks &amp; Caicos Islands)
                    </option>
                    <option value="en_TV">English (Tuvalu)</option>
                    <option value="en_UM">
                      English (U.S. Outlying Islands)
                    </option>
                    <option value="en_VI">English (U.S. Virgin Islands)</option>
                    <option value="en_UG">English (Uganda)</option>
                    <option value="en_GB">English (United Kingdom)</option>
                    <option value="en_US">English (United States)</option>
                    <option value="en_VU">English (Vanuatu)</option>
                    <option value="en_ZM">English (Zambia)</option>
                    <option value="en_ZW">English (Zimbabwe)</option>
                    <option value="eo">Esperanto</option>
                    <option value="et">Estonian</option>
                    <option value="et_EE">Estonian (Estonia)</option>
                    <option value="ee">Ewe</option>
                    <option value="ee_GH">Ewe (Ghana)</option>
                    <option value="ee_TG">Ewe (Togo)</option>
                    <option value="fo">Faroese</option>
                    <option value="fo_FO">Faroese (Faroe Islands)</option>
                    <option value="fi">Finnish</option>
                    <option value="fi_FI">Finnish (Finland)</option>
                    <option value="fr">French</option>
                    <option value="fr_DZ">French (Algeria)</option>
                    <option value="fr_BE">French (Belgium)</option>
                    <option value="fr_BJ">French (Benin)</option>
                    <option value="fr_BF">French (Burkina Faso)</option>
                    <option value="fr_BI">French (Burundi)</option>
                    <option value="fr_CM">French (Cameroon)</option>
                    <option value="fr_CA">French (Canada)</option>
                    <option value="fr_CF">
                      French (Central African Republic)
                    </option>
                    <option value="fr_TD">French (Chad)</option>
                    <option value="fr_KM">French (Comoros)</option>
                    <option value="fr_CG">French (Congo - Brazzaville)</option>
                    <option value="fr_CD">French (Congo - Kinshasa)</option>
                    <option value="fr_CI">French (Côte d’Ivoire)</option>
                    <option value="fr_DJ">French (Djibouti)</option>
                    <option value="fr_GQ">French (Equatorial Guinea)</option>
                    <option value="fr_FR">French (France)</option>
                    <option value="fr_GF">French (French Guiana)</option>
                    <option value="fr_PF">French (French Polynesia)</option>
                    <option value="fr_GA">French (Gabon)</option>
                    <option value="fr_GP">French (Guadeloupe)</option>
                    <option value="fr_GN">French (Guinea)</option>
                    <option value="fr_HT">French (Haiti)</option>
                    <option value="fr_LU">French (Luxembourg)</option>
                    <option value="fr_MG">French (Madagascar)</option>
                    <option value="fr_ML">French (Mali)</option>
                    <option value="fr_MQ">French (Martinique)</option>
                    <option value="fr_MR">French (Mauritania)</option>
                    <option value="fr_MU">French (Mauritius)</option>
                    <option value="fr_YT">French (Mayotte)</option>
                    <option value="fr_MC">French (Monaco)</option>
                    <option value="fr_MA">French (Morocco)</option>
                    <option value="fr_NC">French (New Caledonia)</option>
                    <option value="fr_NE">French (Niger)</option>
                    <option value="fr_RE">French (Réunion)</option>
                    <option value="fr_RW">French (Rwanda)</option>
                    <option value="fr_SN">French (Senegal)</option>
                    <option value="fr_SC">French (Seychelles)</option>
                    <option value="fr_BL">French (St. Barthélemy)</option>
                    <option value="fr_MF">French (St. Martin)</option>
                    <option value="fr_PM">
                      French (St. Pierre &amp; Miquelon)
                    </option>
                    <option value="fr_CH">French (Switzerland)</option>
                    <option value="fr_SY">French (Syria)</option>
                    <option value="fr_TG">French (Togo)</option>
                    <option value="fr_TN">French (Tunisia)</option>
                    <option value="fr_VU">French (Vanuatu)</option>
                    <option value="fr_WF">French (Wallis &amp; Futuna)</option>
                    <option value="ff">Fulah</option>
                    <option value="ff_CM">Fulah (Cameroon)</option>
                    <option value="ff_GN">Fulah (Guinea)</option>
                    <option value="ff_MR">Fulah (Mauritania)</option>
                    <option value="ff_SN">Fulah (Senegal)</option>
                    <option value="gl">Galician</option>
                    <option value="gl_ES">Galician (Spain)</option>
                    <option value="lg">Ganda</option>
                    <option value="lg_UG">Ganda (Uganda)</option>
                    <option value="ka">Georgian</option>
                    <option value="ka_GE">Georgian (Georgia)</option>
                    <option value="de">German</option>
                    <option value="de_AT">German (Austria)</option>
                    <option value="de_BE">German (Belgium)</option>
                    <option value="de_DE">German (Germany)</option>
                    <option value="de_LI">German (Liechtenstein)</option>
                    <option value="de_LU">German (Luxembourg)</option>
                    <option value="de_CH">German (Switzerland)</option>
                    <option value="el">Greek</option>
                    <option value="el_CY">Greek (Cyprus)</option>
                    <option value="el_GR">Greek (Greece)</option>
                    <option value="gu">Gujarati</option>
                    <option value="gu_IN">Gujarati (India)</option>
                    <option value="ha">Hausa</option>
                    <option value="ha_GH">Hausa (Ghana)</option>
                    <option value="ha_Latn_GH">Hausa (Latin, Ghana)</option>
                    <option value="ha_Latn_NE">Hausa (Latin, Niger)</option>
                    <option value="ha_Latn_NG">Hausa (Latin, Nigeria)</option>
                    <option value="ha_Latn">Hausa (Latin)</option>
                    <option value="ha_NE">Hausa (Niger)</option>
                    <option value="ha_NG">Hausa (Nigeria)</option>
                    <option value="he">Hebrew</option>
                    <option value="he_IL">Hebrew (Israel)</option>
                    <option value="hi">Hindi</option>
                    <option value="hi_IN">Hindi (India)</option>
                    <option value="hu">Hungarian</option>
                    <option value="hu_HU">Hungarian (Hungary)</option>
                    <option value="is">Icelandic</option>
                    <option value="is_IS">Icelandic (Iceland)</option>
                    <option value="ig">Igbo</option>
                    <option value="ig_NG">Igbo (Nigeria)</option>
                    <option value="id">Indonesian</option>
                    <option value="id_ID">Indonesian (Indonesia)</option>
                    <option value="ga">Irish</option>
                    <option value="ga_IE">Irish (Ireland)</option>
                    <option value="it">Italian</option>
                    <option value="it_IT">Italian (Italy)</option>
                    <option value="it_SM">Italian (San Marino)</option>
                    <option value="it_CH">Italian (Switzerland)</option>
                    <option value="ja">Japanese</option>
                    <option value="ja_JP">Japanese (Japan)</option>
                    <option value="kl">Kalaallisut</option>
                    <option value="kl_GL">Kalaallisut (Greenland)</option>
                    <option value="kn">Kannada</option>
                    <option value="kn_IN">Kannada (India)</option>
                    <option value="ks">Kashmiri</option>
                    <option value="ks_Arab_IN">Kashmiri (Arabic, India)</option>
                    <option value="ks_Arab">Kashmiri (Arabic)</option>
                    <option value="ks_IN">Kashmiri (India)</option>
                    <option value="kk">Kazakh</option>
                    <option value="kk_Cyrl_KZ">
                      Kazakh (Cyrillic, Kazakhstan)
                    </option>
                    <option value="kk_Cyrl">Kazakh (Cyrillic)</option>
                    <option value="kk_KZ">Kazakh (Kazakhstan)</option>
                    <option value="km">Khmer</option>
                    <option value="km_KH">Khmer (Cambodia)</option>
                    <option value="ki">Kikuyu</option>
                    <option value="ki_KE">Kikuyu (Kenya)</option>
                    <option value="rw">Kinyarwanda</option>
                    <option value="rw_RW">Kinyarwanda (Rwanda)</option>
                    <option value="ko">Korean</option>
                    <option value="ko_KP">Korean (North Korea)</option>
                    <option value="ko_KR">Korean (South Korea)</option>
                    <option value="ky">Kyrgyz</option>
                    <option value="ky_Cyrl_KG">
                      Kyrgyz (Cyrillic, Kyrgyzstan)
                    </option>
                    <option value="ky_Cyrl">Kyrgyz (Cyrillic)</option>
                    <option value="ky_KG">Kyrgyz (Kyrgyzstan)</option>
                    <option value="lo">Lao</option>
                    <option value="lo_LA">Lao (Laos)</option>
                    <option value="lv">Latvian</option>
                    <option value="lv_LV">Latvian (Latvia)</option>
                    <option value="ln">Lingala</option>
                    <option value="ln_AO">Lingala (Angola)</option>
                    <option value="ln_CF">
                      Lingala (Central African Republic)
                    </option>
                    <option value="ln_CG">Lingala (Congo - Brazzaville)</option>
                    <option value="ln_CD">Lingala (Congo - Kinshasa)</option>
                    <option value="lt">Lithuanian</option>
                    <option value="lt_LT">Lithuanian (Lithuania)</option>
                    <option value="lu">Luba-Katanga</option>
                    <option value="lu_CD">
                      Luba-Katanga (Congo - Kinshasa)
                    </option>
                    <option value="lb">Luxembourgish</option>
                    <option value="lb_LU">Luxembourgish (Luxembourg)</option>
                    <option value="mk">Macedonian</option>
                    <option value="mk_MK">Macedonian (Macedonia)</option>
                    <option value="mg">Malagasy</option>
                    <option value="mg_MG">Malagasy (Madagascar)</option>
                    <option value="ms">Malay</option>
                    <option value="ms_BN">Malay (Brunei)</option>
                    <option value="ms_Latn_BN">Malay (Latin, Brunei)</option>
                    <option value="ms_Latn_MY">Malay (Latin, Malaysia)</option>
                    <option value="ms_Latn_SG">Malay (Latin, Singapore)</option>
                    <option value="ms_Latn">Malay (Latin)</option>
                    <option value="ms_MY">Malay (Malaysia)</option>
                    <option value="ms_SG">Malay (Singapore)</option>
                    <option value="ml">Malayalam</option>
                    <option value="ml_IN">Malayalam (India)</option>
                    <option value="mt">Maltese</option>
                    <option value="mt_MT">Maltese (Malta)</option>
                    <option value="gv">Manx</option>
                    <option value="gv_IM">Manx (Isle of Man)</option>
                    <option value="mr">Marathi</option>
                    <option value="mr_IN">Marathi (India)</option>
                    <option value="mn">Mongolian</option>
                    <option value="mn_Cyrl_MN">
                      Mongolian (Cyrillic, Mongolia)
                    </option>
                    <option value="mn_Cyrl">Mongolian (Cyrillic)</option>
                    <option value="mn_MN">Mongolian (Mongolia)</option>
                    <option value="ne">Nepali</option>
                    <option value="ne_IN">Nepali (India)</option>
                    <option value="ne_NP">Nepali (Nepal)</option>
                    <option value="nd">North Ndebele</option>
                    <option value="nd_ZW">North Ndebele (Zimbabwe)</option>
                    <option value="se">Northern Sami</option>
                    <option value="se_FI">Northern Sami (Finland)</option>
                    <option value="se_NO">Northern Sami (Norway)</option>
                    <option value="se_SE">Northern Sami (Sweden)</option>
                    <option value="no">Norwegian</option>
                    <option value="no_NO">Norwegian (Norway)</option>
                    <option value="nb">Norwegian Bokmål</option>
                    <option value="nb_NO">Norwegian Bokmål (Norway)</option>
                    <option value="nb_SJ">
                      Norwegian Bokmål (Svalbard &amp; Jan Mayen)
                    </option>
                    <option value="nn">Norwegian Nynorsk</option>
                    <option value="nn_NO">Norwegian Nynorsk (Norway)</option>
                    <option value="or">Oriya</option>
                    <option value="or_IN">Oriya (India)</option>
                    <option value="om">Oromo</option>
                    <option value="om_ET">Oromo (Ethiopia)</option>
                    <option value="om_KE">Oromo (Kenya)</option>
                    <option value="os">Ossetic</option>
                    <option value="os_GE">Ossetic (Georgia)</option>
                    <option value="os_RU">Ossetic (Russia)</option>
                    <option value="ps">Pashto</option>
                    <option value="ps_AF">Pashto (Afghanistan)</option>
                    <option value="fa">Persian</option>
                    <option value="fa_AF">Persian (Afghanistan)</option>
                    <option value="fa_IR">Persian (Iran)</option>
                    <option value="pl">Polish</option>
                    <option value="pl_PL">Polish (Poland)</option>
                    <option value="pt">Portuguese</option>
                    <option value="pt_AO">Portuguese (Angola)</option>
                    <option value="pt_BR">Portuguese (Brazil)</option>
                    <option value="pt_CV">Portuguese (Cape Verde)</option>
                    <option value="pt_GW">Portuguese (Guinea-Bissau)</option>
                    <option value="pt_MO">Portuguese (Macau SAR China)</option>
                    <option value="pt_MZ">Portuguese (Mozambique)</option>
                    <option value="pt_PT">Portuguese (Portugal)</option>
                    <option value="pt_ST">
                      Portuguese (São Tomé &amp; Príncipe)
                    </option>
                    <option value="pt_TL">Portuguese (Timor-Leste)</option>
                    <option value="pa">Punjabi</option>
                    <option value="pa_Arab_PK">
                      Punjabi (Arabic, Pakistan)
                    </option>
                    <option value="pa_Arab">Punjabi (Arabic)</option>
                    <option value="pa_Guru_IN">
                      Punjabi (Gurmukhi, India)
                    </option>
                    <option value="pa_Guru">Punjabi (Gurmukhi)</option>
                    <option value="pa_IN">Punjabi (India)</option>
                    <option value="pa_PK">Punjabi (Pakistan)</option>
                    <option value="qu">Quechua</option>
                    <option value="qu_BO">Quechua (Bolivia)</option>
                    <option value="qu_EC">Quechua (Ecuador)</option>
                    <option value="qu_PE">Quechua (Peru)</option>
                    <option value="ro">Romanian</option>
                    <option value="ro_MD">Romanian (Moldova)</option>
                    <option value="ro_RO">Romanian (Romania)</option>
                    <option value="rm">Romansh</option>
                    <option value="rm_CH">Romansh (Switzerland)</option>
                    <option value="rn">Rundi</option>
                    <option value="rn_BI">Rundi (Burundi)</option>
                    <option value="ru">Russian</option>
                    <option value="ru_BY">Russian (Belarus)</option>
                    <option value="ru_KZ">Russian (Kazakhstan)</option>
                    <option value="ru_KG">Russian (Kyrgyzstan)</option>
                    <option value="ru_MD">Russian (Moldova)</option>
                    <option value="ru_RU">Russian (Russia)</option>
                    <option value="ru_UA">Russian (Ukraine)</option>
                    <option value="sg">Sango</option>
                    <option value="sg_CF">
                      Sango (Central African Republic)
                    </option>
                    <option value="gd">Scottish Gaelic</option>
                    <option value="gd_GB">
                      Scottish Gaelic (United Kingdom)
                    </option>
                    <option value="sr">Serbian</option>
                    <option value="sr_BA">
                      Serbian (Bosnia &amp; Herzegovina)
                    </option>
                    <option value="sr_Cyrl_BA">
                      Serbian (Cyrillic, Bosnia &amp; Herzegovina)
                    </option>
                    <option value="sr_Cyrl_XK">
                      Serbian (Cyrillic, Kosovo)
                    </option>
                    <option value="sr_Cyrl_ME">
                      Serbian (Cyrillic, Montenegro)
                    </option>
                    <option value="sr_Cyrl_RS">
                      Serbian (Cyrillic, Serbia)
                    </option>
                    <option value="sr_Cyrl">Serbian (Cyrillic)</option>
                    <option value="sr_XK">Serbian (Kosovo)</option>
                    <option value="sr_Latn_BA">
                      Serbian (Latin, Bosnia &amp; Herzegovina)
                    </option>
                    <option value="sr_Latn_XK">Serbian (Latin, Kosovo)</option>
                    <option value="sr_Latn_ME">
                      Serbian (Latin, Montenegro)
                    </option>
                    <option value="sr_Latn_RS">Serbian (Latin, Serbia)</option>
                    <option value="sr_Latn">Serbian (Latin)</option>
                    <option value="sr_ME">Serbian (Montenegro)</option>
                    <option value="sr_RS">Serbian (Serbia)</option>
                    <option value="sh">Serbo-Croatian</option>
                    <option value="sh_BA">
                      Serbo-Croatian (Bosnia &amp; Herzegovina)
                    </option>
                    <option value="sn">Shona</option>
                    <option value="sn_ZW">Shona (Zimbabwe)</option>
                    <option value="ii">Sichuan Yi</option>
                    <option value="ii_CN">Sichuan Yi (China)</option>
                    <option value="si">Sinhala</option>
                    <option value="si_LK">Sinhala (Sri Lanka)</option>
                    <option value="sk">Slovak</option>
                    <option value="sk_SK">Slovak (Slovakia)</option>
                    <option value="sl">Slovenian</option>
                    <option value="sl_SI">Slovenian (Slovenia)</option>
                    <option value="so">Somali</option>
                    <option value="so_DJ">Somali (Djibouti)</option>
                    <option value="so_ET">Somali (Ethiopia)</option>
                    <option value="so_KE">Somali (Kenya)</option>
                    <option value="so_SO">Somali (Somalia)</option>
                    <option value="es">Spanish</option>
                    <option value="es_AR">Spanish (Argentina)</option>
                    <option value="es_BO">Spanish (Bolivia)</option>
                    <option value="es_IC">Spanish (Canary Islands)</option>
                    <option value="es_EA">Spanish (Ceuta &amp; Melilla)</option>
                    <option value="es_CL">Spanish (Chile)</option>
                    <option value="es_CO">Spanish (Colombia)</option>
                    <option value="es_CR">Spanish (Costa Rica)</option>
                    <option value="es_CU">Spanish (Cuba)</option>
                    <option value="es_DO">Spanish (Dominican Republic)</option>
                    <option value="es_EC">Spanish (Ecuador)</option>
                    <option value="es_SV">Spanish (El Salvador)</option>
                    <option value="es_GQ">Spanish (Equatorial Guinea)</option>
                    <option value="es_GT">Spanish (Guatemala)</option>
                    <option value="es_HN">Spanish (Honduras)</option>
                    <option value="es_MX">Spanish (Mexico)</option>
                    <option value="es_NI">Spanish (Nicaragua)</option>
                    <option value="es_PA">Spanish (Panama)</option>
                    <option value="es_PY">Spanish (Paraguay)</option>
                    <option value="es_PE">Spanish (Peru)</option>
                    <option value="es_PH">Spanish (Philippines)</option>
                    <option value="es_PR">Spanish (Puerto Rico)</option>
                    <option value="es_ES">Spanish (Spain)</option>
                    <option value="es_US">Spanish (United States)</option>
                    <option value="es_UY">Spanish (Uruguay)</option>
                    <option value="es_VE">Spanish (Venezuela)</option>
                    <option value="sw">Swahili</option>
                    <option value="sw_KE">Swahili (Kenya)</option>
                    <option value="sw_TZ">Swahili (Tanzania)</option>
                    <option value="sw_UG">Swahili (Uganda)</option>
                    <option value="sv">Swedish</option>
                    <option value="sv_AX">Swedish (Åland Islands)</option>
                    <option value="sv_FI">Swedish (Finland)</option>
                    <option value="sv_SE">Swedish (Sweden)</option>
                    <option value="tl">Tagalog</option>
                    <option value="tl_PH">Tagalog (Philippines)</option>
                    <option value="ta">Tamil</option>
                    <option value="ta_IN">Tamil (India)</option>
                    <option value="ta_MY">Tamil (Malaysia)</option>
                    <option value="ta_SG">Tamil (Singapore)</option>
                    <option value="ta_LK">Tamil (Sri Lanka)</option>
                    <option value="te">Telugu</option>
                    <option value="te_IN">Telugu (India)</option>
                    <option value="th">Thai</option>
                    <option value="th_TH">Thai (Thailand)</option>
                    <option value="bo">Tibetan</option>
                    <option value="bo_CN">Tibetan (China)</option>
                    <option value="bo_IN">Tibetan (India)</option>
                    <option value="ti">Tigrinya</option>
                    <option value="ti_ER">Tigrinya (Eritrea)</option>
                    <option value="ti_ET">Tigrinya (Ethiopia)</option>
                    <option value="to">Tongan</option>
                    <option value="to_TO">Tongan (Tonga)</option>
                    <option value="tr">Turkish</option>
                    <option value="tr_CY">Turkish (Cyprus)</option>
                    <option value="tr_TR">Turkish (Turkey)</option>
                    <option value="uk">Ukrainian</option>
                    <option value="uk_UA">Ukrainian (Ukraine)</option>
                    <option value="ur">Urdu</option>
                    <option value="ur_IN">Urdu (India)</option>
                    <option value="ur_PK">Urdu (Pakistan)</option>
                    <option value="ug">Uyghur</option>
                    <option value="ug_Arab_CN">Uyghur (Arabic, China)</option>
                    <option value="ug_Arab">Uyghur (Arabic)</option>
                    <option value="ug_CN">Uyghur (China)</option>
                    <option value="uz">Uzbek</option>
                    <option value="uz_AF">Uzbek (Afghanistan)</option>
                    <option value="uz_Arab_AF">
                      Uzbek (Arabic, Afghanistan)
                    </option>
                    <option value="uz_Arab">Uzbek (Arabic)</option>
                    <option value="uz_Cyrl_UZ">
                      Uzbek (Cyrillic, Uzbekistan)
                    </option>
                    <option value="uz_Cyrl">Uzbek (Cyrillic)</option>
                    <option value="uz_Latn_UZ">
                      Uzbek (Latin, Uzbekistan)
                    </option>
                    <option value="uz_Latn">Uzbek (Latin)</option>
                    <option value="uz_UZ">Uzbek (Uzbekistan)</option>
                    <option value="vi">Vietnamese</option>
                    <option value="vi_VN">Vietnamese (Vietnam)</option>
                    <option value="cy">Welsh</option>
                    <option value="cy_GB">Welsh (United Kingdom)</option>
                    <option value="fy">Western Frisian</option>
                    <option value="fy_NL">Western Frisian (Netherlands)</option>
                    <option value="yi">Yiddish</option>
                    <option value="yo">Yoruba</option>
                    <option value="yo_BJ">Yoruba (Benin)</option>
                    <option value="yo_NG">Yoruba (Nigeria)</option>
                    <option value="zu">Zulu</option>
                    <option value="zu_ZA">Zulu (South Africa)</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="default_locale"
                  className="col-md-3 control-label text-left"
                >
                  Default Locale<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <select
                    name="default_locale"
                    className="form-control custom-select-black "
                    id="default_locale"
                  >
                    <option value="af">Afrikaans</option>
                    <option value="af_NA">Afrikaans (Namibia)</option>
                    <option value="af_ZA">Afrikaans (South Africa)</option>
                    <option value="ak">Akan</option>
                    <option value="ak_GH">Akan (Ghana)</option>
                    <option value="sq">Albanian</option>
                    <option value="sq_AL">Albanian (Albania)</option>
                    <option value="sq_XK">Albanian (Kosovo)</option>
                    <option value="sq_MK">Albanian (Macedonia)</option>
                    <option value="am">Amharic</option>
                    <option value="am_ET">Amharic (Ethiopia)</option>
                    <option value="ar">Arabic</option>
                    <option value="ar_DZ">Arabic (Algeria)</option>
                    <option value="ar_BH">Arabic (Bahrain)</option>
                    <option value="ar_TD">Arabic (Chad)</option>
                    <option value="ar_KM">Arabic (Comoros)</option>
                    <option value="ar_DJ">Arabic (Djibouti)</option>
                    <option value="ar_EG">Arabic (Egypt)</option>
                    <option value="ar_ER">Arabic (Eritrea)</option>
                    <option value="ar_IQ">Arabic (Iraq)</option>
                    <option value="ar_IL">Arabic (Israel)</option>
                    <option value="ar_JO">Arabic (Jordan)</option>
                    <option value="ar_KW">Arabic (Kuwait)</option>
                    <option value="ar_LB">Arabic (Lebanon)</option>
                    <option value="ar_LY">Arabic (Libya)</option>
                    <option value="ar_MR">Arabic (Mauritania)</option>
                    <option value="ar_MA">Arabic (Morocco)</option>
                    <option value="ar_OM">Arabic (Oman)</option>
                    <option value="ar_PS">
                      Arabic (Palestinian Territories)
                    </option>
                    <option value="ar_QA">Arabic (Qatar)</option>
                    <option value="ar_SA">Arabic (Saudi Arabia)</option>
                    <option value="ar_SO">Arabic (Somalia)</option>
                    <option value="ar_SS">Arabic (South Sudan)</option>
                    <option value="ar_SD">Arabic (Sudan)</option>
                    <option value="ar_SY">Arabic (Syria)</option>
                    <option value="ar_TN">Arabic (Tunisia)</option>
                    <option value="ar_AE">Arabic (United Arab Emirates)</option>
                    <option value="ar_EH">Arabic (Western Sahara)</option>
                    <option value="ar_YE">Arabic (Yemen)</option>
                    <option value="hy">Armenian</option>
                    <option value="hy_AM">Armenian (Armenia)</option>
                    <option value="as">Assamese</option>
                    <option value="as_IN">Assamese (India)</option>
                    <option value="az">Azerbaijani</option>
                    <option value="az_AZ">Azerbaijani (Azerbaijan)</option>
                    <option value="az_Cyrl_AZ">
                      Azerbaijani (Cyrillic, Azerbaijan)
                    </option>
                    <option value="az_Cyrl">Azerbaijani (Cyrillic)</option>
                    <option value="az_Latn_AZ">
                      Azerbaijani (Latin, Azerbaijan)
                    </option>
                    <option value="az_Latn">Azerbaijani (Latin)</option>
                    <option value="bm">Bambara</option>
                    <option value="bm_Latn_ML">Bambara (Latin, Mali)</option>
                    <option value="bm_Latn">Bambara (Latin)</option>
                    <option value="eu">Basque</option>
                    <option value="eu_ES">Basque (Spain)</option>
                    <option value="be">Belarusian</option>
                    <option value="be_BY">Belarusian (Belarus)</option>
                    <option value="bn">Bengali</option>
                    <option value="bn_BD">Bengali (Bangladesh)</option>
                    <option value="bn_IN">Bengali (India)</option>
                    <option value="bs">Bosnian</option>
                    <option value="bs_BA">
                      Bosnian (Bosnia &amp; Herzegovina)
                    </option>
                    <option value="bs_Cyrl_BA">
                      Bosnian (Cyrillic, Bosnia &amp; Herzegovina)
                    </option>
                    <option value="bs_Cyrl">Bosnian (Cyrillic)</option>
                    <option value="bs_Latn_BA">
                      Bosnian (Latin, Bosnia &amp; Herzegovina)
                    </option>
                    <option value="bs_Latn">Bosnian (Latin)</option>
                    <option value="br">Breton</option>
                    <option value="br_FR">Breton (France)</option>
                    <option value="bg">Bulgarian</option>
                    <option value="bg_BG">Bulgarian (Bulgaria)</option>
                    <option value="my">Burmese</option>
                    <option value="my_MM">Burmese (Myanmar (Burma))</option>
                    <option value="ca">Catalan</option>
                    <option value="ca_AD">Catalan (Andorra)</option>
                    <option value="ca_FR">Catalan (France)</option>
                    <option value="ca_IT">Catalan (Italy)</option>
                    <option value="ca_ES">Catalan (Spain)</option>
                    <option value="zh">Chinese</option>
                    <option value="zh_CN">Chinese (China)</option>
                    <option value="zh_HK">Chinese (Hong Kong SAR China)</option>
                    <option value="zh_MO">Chinese (Macau SAR China)</option>
                    <option value="zh_Hans_CN">
                      Chinese (Simplified, China)
                    </option>
                    <option value="zh_Hans_HK">
                      Chinese (Simplified, Hong Kong SAR China)
                    </option>
                    <option value="zh_Hans_MO">
                      Chinese (Simplified, Macau SAR China)
                    </option>
                    <option value="zh_Hans_SG">
                      Chinese (Simplified, Singapore)
                    </option>
                    <option value="zh_Hans">Chinese (Simplified)</option>
                    <option value="zh_SG">Chinese (Singapore)</option>
                    <option value="zh_TW">Chinese (Taiwan)</option>
                    <option value="zh_Hant_HK">
                      Chinese (Traditional, Hong Kong SAR China)
                    </option>
                    <option value="zh_Hant_MO">
                      Chinese (Traditional, Macau SAR China)
                    </option>
                    <option value="zh_Hant_TW">
                      Chinese (Traditional, Taiwan)
                    </option>
                    <option value="zh_Hant">Chinese (Traditional)</option>
                    <option value="kw">Cornish</option>
                    <option value="kw_GB">Cornish (United Kingdom)</option>
                    <option value="hr">Croatian</option>
                    <option value="hr_BA">
                      Croatian (Bosnia &amp; Herzegovina)
                    </option>
                    <option value="hr_HR">Croatian (Croatia)</option>
                    <option value="cs">Czech</option>
                    <option value="cs_CZ">Czech (Czech Republic)</option>
                    <option value="da">Danish</option>
                    <option value="da_DK">Danish (Denmark)</option>
                    <option value="da_GL">Danish (Greenland)</option>
                    <option value="nl">Dutch</option>
                    <option value="nl_AW">Dutch (Aruba)</option>
                    <option value="nl_BE">Dutch (Belgium)</option>
                    <option value="nl_BQ">Dutch (Caribbean Netherlands)</option>
                    <option value="nl_CW">Dutch (Curaçao)</option>
                    <option value="nl_NL">Dutch (Netherlands)</option>
                    <option value="nl_SX">Dutch (Sint Maarten)</option>
                    <option value="nl_SR">Dutch (Suriname)</option>
                    <option value="dz">Dzongkha</option>
                    <option value="dz_BT">Dzongkha (Bhutan)</option>
                    <option value="en" selected>
                      English
                    </option>
                    <option value="en_AS">English (American Samoa)</option>
                    <option value="en_AI">English (Anguilla)</option>
                    <option value="en_AG">
                      English (Antigua &amp; Barbuda)
                    </option>
                    <option value="en_AU">English (Australia)</option>
                    <option value="en_BS">English (Bahamas)</option>
                    <option value="en_BB">English (Barbados)</option>
                    <option value="en_BE">English (Belgium)</option>
                    <option value="en_BZ">English (Belize)</option>
                    <option value="en_BM">English (Bermuda)</option>
                    <option value="en_BW">English (Botswana)</option>
                    <option value="en_IO">
                      English (British Indian Ocean Territory)
                    </option>
                    <option value="en_VG">
                      English (British Virgin Islands)
                    </option>
                    <option value="en_CM">English (Cameroon)</option>
                    <option value="en_CA">English (Canada)</option>
                    <option value="en_KY">English (Cayman Islands)</option>
                    <option value="en_CX">English (Christmas Island)</option>
                    <option value="en_CC">
                      English (Cocos (Keeling) Islands)
                    </option>
                    <option value="en_CK">English (Cook Islands)</option>
                    <option value="en_DG">English (Diego Garcia)</option>
                    <option value="en_DM">English (Dominica)</option>
                    <option value="en_ER">English (Eritrea)</option>
                    <option value="en_FK">English (Falkland Islands)</option>
                    <option value="en_FJ">English (Fiji)</option>
                    <option value="en_GM">English (Gambia)</option>
                    <option value="en_GH">English (Ghana)</option>
                    <option value="en_GI">English (Gibraltar)</option>
                    <option value="en_GD">English (Grenada)</option>
                    <option value="en_GU">English (Guam)</option>
                    <option value="en_GG">English (Guernsey)</option>
                    <option value="en_GY">English (Guyana)</option>
                    <option value="en_HK">English (Hong Kong SAR China)</option>
                    <option value="en_IN">English (India)</option>
                    <option value="en_IE">English (Ireland)</option>
                    <option value="en_IM">English (Isle of Man)</option>
                    <option value="en_JM">English (Jamaica)</option>
                    <option value="en_JE">English (Jersey)</option>
                    <option value="en_KE">English (Kenya)</option>
                    <option value="en_KI">English (Kiribati)</option>
                    <option value="en_LS">English (Lesotho)</option>
                    <option value="en_LR">English (Liberia)</option>
                    <option value="en_MO">English (Macau SAR China)</option>
                    <option value="en_MG">English (Madagascar)</option>
                    <option value="en_MW">English (Malawi)</option>
                    <option value="en_MY">English (Malaysia)</option>
                    <option value="en_MT">English (Malta)</option>
                    <option value="en_MH">English (Marshall Islands)</option>
                    <option value="en_MU">English (Mauritius)</option>
                    <option value="en_FM">English (Micronesia)</option>
                    <option value="en_MS">English (Montserrat)</option>
                    <option value="en_NA">English (Namibia)</option>
                    <option value="en_NR">English (Nauru)</option>
                    <option value="en_NZ">English (New Zealand)</option>
                    <option value="en_NG">English (Nigeria)</option>
                    <option value="en_NU">English (Niue)</option>
                    <option value="en_NF">English (Norfolk Island)</option>
                    <option value="en_MP">
                      English (Northern Mariana Islands)
                    </option>
                    <option value="en_PK">English (Pakistan)</option>
                    <option value="en_PW">English (Palau)</option>
                    <option value="en_PG">English (Papua New Guinea)</option>
                    <option value="en_PH">English (Philippines)</option>
                    <option value="en_PN">English (Pitcairn Islands)</option>
                    <option value="en_PR">English (Puerto Rico)</option>
                    <option value="en_RW">English (Rwanda)</option>
                    <option value="en_WS">English (Samoa)</option>
                    <option value="en_SC">English (Seychelles)</option>
                    <option value="en_SL">English (Sierra Leone)</option>
                    <option value="en_SG">English (Singapore)</option>
                    <option value="en_SX">English (Sint Maarten)</option>
                    <option value="en_SB">English (Solomon Islands)</option>
                    <option value="en_ZA">English (South Africa)</option>
                    <option value="en_SS">English (South Sudan)</option>
                    <option value="en_SH">English (St. Helena)</option>
                    <option value="en_KN">
                      English (St. Kitts &amp; Nevis)
                    </option>
                    <option value="en_LC">English (St. Lucia)</option>
                    <option value="en_VC">
                      English (St. Vincent &amp; Grenadines)
                    </option>
                    <option value="en_SD">English (Sudan)</option>
                    <option value="en_SZ">English (Swaziland)</option>
                    <option value="en_TZ">English (Tanzania)</option>
                    <option value="en_TK">English (Tokelau)</option>
                    <option value="en_TO">English (Tonga)</option>
                    <option value="en_TT">
                      English (Trinidad &amp; Tobago)
                    </option>
                    <option value="en_TC">
                      English (Turks &amp; Caicos Islands)
                    </option>
                    <option value="en_TV">English (Tuvalu)</option>
                    <option value="en_UM">
                      English (U.S. Outlying Islands)
                    </option>
                    <option value="en_VI">English (U.S. Virgin Islands)</option>
                    <option value="en_UG">English (Uganda)</option>
                    <option value="en_GB">English (United Kingdom)</option>
                    <option value="en_US">English (United States)</option>
                    <option value="en_VU">English (Vanuatu)</option>
                    <option value="en_ZM">English (Zambia)</option>
                    <option value="en_ZW">English (Zimbabwe)</option>
                    <option value="eo">Esperanto</option>
                    <option value="et">Estonian</option>
                    <option value="et_EE">Estonian (Estonia)</option>
                    <option value="ee">Ewe</option>
                    <option value="ee_GH">Ewe (Ghana)</option>
                    <option value="ee_TG">Ewe (Togo)</option>
                    <option value="fo">Faroese</option>
                    <option value="fo_FO">Faroese (Faroe Islands)</option>
                    <option value="fi">Finnish</option>
                    <option value="fi_FI">Finnish (Finland)</option>
                    <option value="fr">French</option>
                    <option value="fr_DZ">French (Algeria)</option>
                    <option value="fr_BE">French (Belgium)</option>
                    <option value="fr_BJ">French (Benin)</option>
                    <option value="fr_BF">French (Burkina Faso)</option>
                    <option value="fr_BI">French (Burundi)</option>
                    <option value="fr_CM">French (Cameroon)</option>
                    <option value="fr_CA">French (Canada)</option>
                    <option value="fr_CF">
                      French (Central African Republic)
                    </option>
                    <option value="fr_TD">French (Chad)</option>
                    <option value="fr_KM">French (Comoros)</option>
                    <option value="fr_CG">French (Congo - Brazzaville)</option>
                    <option value="fr_CD">French (Congo - Kinshasa)</option>
                    <option value="fr_CI">French (Côte d’Ivoire)</option>
                    <option value="fr_DJ">French (Djibouti)</option>
                    <option value="fr_GQ">French (Equatorial Guinea)</option>
                    <option value="fr_FR">French (France)</option>
                    <option value="fr_GF">French (French Guiana)</option>
                    <option value="fr_PF">French (French Polynesia)</option>
                    <option value="fr_GA">French (Gabon)</option>
                    <option value="fr_GP">French (Guadeloupe)</option>
                    <option value="fr_GN">French (Guinea)</option>
                    <option value="fr_HT">French (Haiti)</option>
                    <option value="fr_LU">French (Luxembourg)</option>
                    <option value="fr_MG">French (Madagascar)</option>
                    <option value="fr_ML">French (Mali)</option>
                    <option value="fr_MQ">French (Martinique)</option>
                    <option value="fr_MR">French (Mauritania)</option>
                    <option value="fr_MU">French (Mauritius)</option>
                    <option value="fr_YT">French (Mayotte)</option>
                    <option value="fr_MC">French (Monaco)</option>
                    <option value="fr_MA">French (Morocco)</option>
                    <option value="fr_NC">French (New Caledonia)</option>
                    <option value="fr_NE">French (Niger)</option>
                    <option value="fr_RE">French (Réunion)</option>
                    <option value="fr_RW">French (Rwanda)</option>
                    <option value="fr_SN">French (Senegal)</option>
                    <option value="fr_SC">French (Seychelles)</option>
                    <option value="fr_BL">French (St. Barthélemy)</option>
                    <option value="fr_MF">French (St. Martin)</option>
                    <option value="fr_PM">
                      French (St. Pierre &amp; Miquelon)
                    </option>
                    <option value="fr_CH">French (Switzerland)</option>
                    <option value="fr_SY">French (Syria)</option>
                    <option value="fr_TG">French (Togo)</option>
                    <option value="fr_TN">French (Tunisia)</option>
                    <option value="fr_VU">French (Vanuatu)</option>
                    <option value="fr_WF">French (Wallis &amp; Futuna)</option>
                    <option value="ff">Fulah</option>
                    <option value="ff_CM">Fulah (Cameroon)</option>
                    <option value="ff_GN">Fulah (Guinea)</option>
                    <option value="ff_MR">Fulah (Mauritania)</option>
                    <option value="ff_SN">Fulah (Senegal)</option>
                    <option value="gl">Galician</option>
                    <option value="gl_ES">Galician (Spain)</option>
                    <option value="lg">Ganda</option>
                    <option value="lg_UG">Ganda (Uganda)</option>
                    <option value="ka">Georgian</option>
                    <option value="ka_GE">Georgian (Georgia)</option>
                    <option value="de">German</option>
                    <option value="de_AT">German (Austria)</option>
                    <option value="de_BE">German (Belgium)</option>
                    <option value="de_DE">German (Germany)</option>
                    <option value="de_LI">German (Liechtenstein)</option>
                    <option value="de_LU">German (Luxembourg)</option>
                    <option value="de_CH">German (Switzerland)</option>
                    <option value="el">Greek</option>
                    <option value="el_CY">Greek (Cyprus)</option>
                    <option value="el_GR">Greek (Greece)</option>
                    <option value="gu">Gujarati</option>
                    <option value="gu_IN">Gujarati (India)</option>
                    <option value="ha">Hausa</option>
                    <option value="ha_GH">Hausa (Ghana)</option>
                    <option value="ha_Latn_GH">Hausa (Latin, Ghana)</option>
                    <option value="ha_Latn_NE">Hausa (Latin, Niger)</option>
                    <option value="ha_Latn_NG">Hausa (Latin, Nigeria)</option>
                    <option value="ha_Latn">Hausa (Latin)</option>
                    <option value="ha_NE">Hausa (Niger)</option>
                    <option value="ha_NG">Hausa (Nigeria)</option>
                    <option value="he">Hebrew</option>
                    <option value="he_IL">Hebrew (Israel)</option>
                    <option value="hi">Hindi</option>
                    <option value="hi_IN">Hindi (India)</option>
                    <option value="hu">Hungarian</option>
                    <option value="hu_HU">Hungarian (Hungary)</option>
                    <option value="is">Icelandic</option>
                    <option value="is_IS">Icelandic (Iceland)</option>
                    <option value="ig">Igbo</option>
                    <option value="ig_NG">Igbo (Nigeria)</option>
                    <option value="id">Indonesian</option>
                    <option value="id_ID">Indonesian (Indonesia)</option>
                    <option value="ga">Irish</option>
                    <option value="ga_IE">Irish (Ireland)</option>
                    <option value="it">Italian</option>
                    <option value="it_IT">Italian (Italy)</option>
                    <option value="it_SM">Italian (San Marino)</option>
                    <option value="it_CH">Italian (Switzerland)</option>
                    <option value="ja">Japanese</option>
                    <option value="ja_JP">Japanese (Japan)</option>
                    <option value="kl">Kalaallisut</option>
                    <option value="kl_GL">Kalaallisut (Greenland)</option>
                    <option value="kn">Kannada</option>
                    <option value="kn_IN">Kannada (India)</option>
                    <option value="ks">Kashmiri</option>
                    <option value="ks_Arab_IN">Kashmiri (Arabic, India)</option>
                    <option value="ks_Arab">Kashmiri (Arabic)</option>
                    <option value="ks_IN">Kashmiri (India)</option>
                    <option value="kk">Kazakh</option>
                    <option value="kk_Cyrl_KZ">
                      Kazakh (Cyrillic, Kazakhstan)
                    </option>
                    <option value="kk_Cyrl">Kazakh (Cyrillic)</option>
                    <option value="kk_KZ">Kazakh (Kazakhstan)</option>
                    <option value="km">Khmer</option>
                    <option value="km_KH">Khmer (Cambodia)</option>
                    <option value="ki">Kikuyu</option>
                    <option value="ki_KE">Kikuyu (Kenya)</option>
                    <option value="rw">Kinyarwanda</option>
                    <option value="rw_RW">Kinyarwanda (Rwanda)</option>
                    <option value="ko">Korean</option>
                    <option value="ko_KP">Korean (North Korea)</option>
                    <option value="ko_KR">Korean (South Korea)</option>
                    <option value="ky">Kyrgyz</option>
                    <option value="ky_Cyrl_KG">
                      Kyrgyz (Cyrillic, Kyrgyzstan)
                    </option>
                    <option value="ky_Cyrl">Kyrgyz (Cyrillic)</option>
                    <option value="ky_KG">Kyrgyz (Kyrgyzstan)</option>
                    <option value="lo">Lao</option>
                    <option value="lo_LA">Lao (Laos)</option>
                    <option value="lv">Latvian</option>
                    <option value="lv_LV">Latvian (Latvia)</option>
                    <option value="ln">Lingala</option>
                    <option value="ln_AO">Lingala (Angola)</option>
                    <option value="ln_CF">
                      Lingala (Central African Republic)
                    </option>
                    <option value="ln_CG">Lingala (Congo - Brazzaville)</option>
                    <option value="ln_CD">Lingala (Congo - Kinshasa)</option>
                    <option value="lt">Lithuanian</option>
                    <option value="lt_LT">Lithuanian (Lithuania)</option>
                    <option value="lu">Luba-Katanga</option>
                    <option value="lu_CD">
                      Luba-Katanga (Congo - Kinshasa)
                    </option>
                    <option value="lb">Luxembourgish</option>
                    <option value="lb_LU">Luxembourgish (Luxembourg)</option>
                    <option value="mk">Macedonian</option>
                    <option value="mk_MK">Macedonian (Macedonia)</option>
                    <option value="mg">Malagasy</option>
                    <option value="mg_MG">Malagasy (Madagascar)</option>
                    <option value="ms">Malay</option>
                    <option value="ms_BN">Malay (Brunei)</option>
                    <option value="ms_Latn_BN">Malay (Latin, Brunei)</option>
                    <option value="ms_Latn_MY">Malay (Latin, Malaysia)</option>
                    <option value="ms_Latn_SG">Malay (Latin, Singapore)</option>
                    <option value="ms_Latn">Malay (Latin)</option>
                    <option value="ms_MY">Malay (Malaysia)</option>
                    <option value="ms_SG">Malay (Singapore)</option>
                    <option value="ml">Malayalam</option>
                    <option value="ml_IN">Malayalam (India)</option>
                    <option value="mt">Maltese</option>
                    <option value="mt_MT">Maltese (Malta)</option>
                    <option value="gv">Manx</option>
                    <option value="gv_IM">Manx (Isle of Man)</option>
                    <option value="mr">Marathi</option>
                    <option value="mr_IN">Marathi (India)</option>
                    <option value="mn">Mongolian</option>
                    <option value="mn_Cyrl_MN">
                      Mongolian (Cyrillic, Mongolia)
                    </option>
                    <option value="mn_Cyrl">Mongolian (Cyrillic)</option>
                    <option value="mn_MN">Mongolian (Mongolia)</option>
                    <option value="ne">Nepali</option>
                    <option value="ne_IN">Nepali (India)</option>
                    <option value="ne_NP">Nepali (Nepal)</option>
                    <option value="nd">North Ndebele</option>
                    <option value="nd_ZW">North Ndebele (Zimbabwe)</option>
                    <option value="se">Northern Sami</option>
                    <option value="se_FI">Northern Sami (Finland)</option>
                    <option value="se_NO">Northern Sami (Norway)</option>
                    <option value="se_SE">Northern Sami (Sweden)</option>
                    <option value="no">Norwegian</option>
                    <option value="no_NO">Norwegian (Norway)</option>
                    <option value="nb">Norwegian Bokmål</option>
                    <option value="nb_NO">Norwegian Bokmål (Norway)</option>
                    <option value="nb_SJ">
                      Norwegian Bokmål (Svalbard &amp; Jan Mayen)
                    </option>
                    <option value="nn">Norwegian Nynorsk</option>
                    <option value="nn_NO">Norwegian Nynorsk (Norway)</option>
                    <option value="or">Oriya</option>
                    <option value="or_IN">Oriya (India)</option>
                    <option value="om">Oromo</option>
                    <option value="om_ET">Oromo (Ethiopia)</option>
                    <option value="om_KE">Oromo (Kenya)</option>
                    <option value="os">Ossetic</option>
                    <option value="os_GE">Ossetic (Georgia)</option>
                    <option value="os_RU">Ossetic (Russia)</option>
                    <option value="ps">Pashto</option>
                    <option value="ps_AF">Pashto (Afghanistan)</option>
                    <option value="fa">Persian</option>
                    <option value="fa_AF">Persian (Afghanistan)</option>
                    <option value="fa_IR">Persian (Iran)</option>
                    <option value="pl">Polish</option>
                    <option value="pl_PL">Polish (Poland)</option>
                    <option value="pt">Portuguese</option>
                    <option value="pt_AO">Portuguese (Angola)</option>
                    <option value="pt_BR">Portuguese (Brazil)</option>
                    <option value="pt_CV">Portuguese (Cape Verde)</option>
                    <option value="pt_GW">Portuguese (Guinea-Bissau)</option>
                    <option value="pt_MO">Portuguese (Macau SAR China)</option>
                    <option value="pt_MZ">Portuguese (Mozambique)</option>
                    <option value="pt_PT">Portuguese (Portugal)</option>
                    <option value="pt_ST">
                      Portuguese (São Tomé &amp; Príncipe)
                    </option>
                    <option value="pt_TL">Portuguese (Timor-Leste)</option>
                    <option value="pa">Punjabi</option>
                    <option value="pa_Arab_PK">
                      Punjabi (Arabic, Pakistan)
                    </option>
                    <option value="pa_Arab">Punjabi (Arabic)</option>
                    <option value="pa_Guru_IN">
                      Punjabi (Gurmukhi, India)
                    </option>
                    <option value="pa_Guru">Punjabi (Gurmukhi)</option>
                    <option value="pa_IN">Punjabi (India)</option>
                    <option value="pa_PK">Punjabi (Pakistan)</option>
                    <option value="qu">Quechua</option>
                    <option value="qu_BO">Quechua (Bolivia)</option>
                    <option value="qu_EC">Quechua (Ecuador)</option>
                    <option value="qu_PE">Quechua (Peru)</option>
                    <option value="ro">Romanian</option>
                    <option value="ro_MD">Romanian (Moldova)</option>
                    <option value="ro_RO">Romanian (Romania)</option>
                    <option value="rm">Romansh</option>
                    <option value="rm_CH">Romansh (Switzerland)</option>
                    <option value="rn">Rundi</option>
                    <option value="rn_BI">Rundi (Burundi)</option>
                    <option value="ru">Russian</option>
                    <option value="ru_BY">Russian (Belarus)</option>
                    <option value="ru_KZ">Russian (Kazakhstan)</option>
                    <option value="ru_KG">Russian (Kyrgyzstan)</option>
                    <option value="ru_MD">Russian (Moldova)</option>
                    <option value="ru_RU">Russian (Russia)</option>
                    <option value="ru_UA">Russian (Ukraine)</option>
                    <option value="sg">Sango</option>
                    <option value="sg_CF">
                      Sango (Central African Republic)
                    </option>
                    <option value="gd">Scottish Gaelic</option>
                    <option value="gd_GB">
                      Scottish Gaelic (United Kingdom)
                    </option>
                    <option value="sr">Serbian</option>
                    <option value="sr_BA">
                      Serbian (Bosnia &amp; Herzegovina)
                    </option>
                    <option value="sr_Cyrl_BA">
                      Serbian (Cyrillic, Bosnia &amp; Herzegovina)
                    </option>
                    <option value="sr_Cyrl_XK">
                      Serbian (Cyrillic, Kosovo)
                    </option>
                    <option value="sr_Cyrl_ME">
                      Serbian (Cyrillic, Montenegro)
                    </option>
                    <option value="sr_Cyrl_RS">
                      Serbian (Cyrillic, Serbia)
                    </option>
                    <option value="sr_Cyrl">Serbian (Cyrillic)</option>
                    <option value="sr_XK">Serbian (Kosovo)</option>
                    <option value="sr_Latn_BA">
                      Serbian (Latin, Bosnia &amp; Herzegovina)
                    </option>
                    <option value="sr_Latn_XK">Serbian (Latin, Kosovo)</option>
                    <option value="sr_Latn_ME">
                      Serbian (Latin, Montenegro)
                    </option>
                    <option value="sr_Latn_RS">Serbian (Latin, Serbia)</option>
                    <option value="sr_Latn">Serbian (Latin)</option>
                    <option value="sr_ME">Serbian (Montenegro)</option>
                    <option value="sr_RS">Serbian (Serbia)</option>
                    <option value="sh">Serbo-Croatian</option>
                    <option value="sh_BA">
                      Serbo-Croatian (Bosnia &amp; Herzegovina)
                    </option>
                    <option value="sn">Shona</option>
                    <option value="sn_ZW">Shona (Zimbabwe)</option>
                    <option value="ii">Sichuan Yi</option>
                    <option value="ii_CN">Sichuan Yi (China)</option>
                    <option value="si">Sinhala</option>
                    <option value="si_LK">Sinhala (Sri Lanka)</option>
                    <option value="sk">Slovak</option>
                    <option value="sk_SK">Slovak (Slovakia)</option>
                    <option value="sl">Slovenian</option>
                    <option value="sl_SI">Slovenian (Slovenia)</option>
                    <option value="so">Somali</option>
                    <option value="so_DJ">Somali (Djibouti)</option>
                    <option value="so_ET">Somali (Ethiopia)</option>
                    <option value="so_KE">Somali (Kenya)</option>
                    <option value="so_SO">Somali (Somalia)</option>
                    <option value="es">Spanish</option>
                    <option value="es_AR">Spanish (Argentina)</option>
                    <option value="es_BO">Spanish (Bolivia)</option>
                    <option value="es_IC">Spanish (Canary Islands)</option>
                    <option value="es_EA">Spanish (Ceuta &amp; Melilla)</option>
                    <option value="es_CL">Spanish (Chile)</option>
                    <option value="es_CO">Spanish (Colombia)</option>
                    <option value="es_CR">Spanish (Costa Rica)</option>
                    <option value="es_CU">Spanish (Cuba)</option>
                    <option value="es_DO">Spanish (Dominican Republic)</option>
                    <option value="es_EC">Spanish (Ecuador)</option>
                    <option value="es_SV">Spanish (El Salvador)</option>
                    <option value="es_GQ">Spanish (Equatorial Guinea)</option>
                    <option value="es_GT">Spanish (Guatemala)</option>
                    <option value="es_HN">Spanish (Honduras)</option>
                    <option value="es_MX">Spanish (Mexico)</option>
                    <option value="es_NI">Spanish (Nicaragua)</option>
                    <option value="es_PA">Spanish (Panama)</option>
                    <option value="es_PY">Spanish (Paraguay)</option>
                    <option value="es_PE">Spanish (Peru)</option>
                    <option value="es_PH">Spanish (Philippines)</option>
                    <option value="es_PR">Spanish (Puerto Rico)</option>
                    <option value="es_ES">Spanish (Spain)</option>
                    <option value="es_US">Spanish (United States)</option>
                    <option value="es_UY">Spanish (Uruguay)</option>
                    <option value="es_VE">Spanish (Venezuela)</option>
                    <option value="sw">Swahili</option>
                    <option value="sw_KE">Swahili (Kenya)</option>
                    <option value="sw_TZ">Swahili (Tanzania)</option>
                    <option value="sw_UG">Swahili (Uganda)</option>
                    <option value="sv">Swedish</option>
                    <option value="sv_AX">Swedish (Åland Islands)</option>
                    <option value="sv_FI">Swedish (Finland)</option>
                    <option value="sv_SE">Swedish (Sweden)</option>
                    <option value="tl">Tagalog</option>
                    <option value="tl_PH">Tagalog (Philippines)</option>
                    <option value="ta">Tamil</option>
                    <option value="ta_IN">Tamil (India)</option>
                    <option value="ta_MY">Tamil (Malaysia)</option>
                    <option value="ta_SG">Tamil (Singapore)</option>
                    <option value="ta_LK">Tamil (Sri Lanka)</option>
                    <option value="te">Telugu</option>
                    <option value="te_IN">Telugu (India)</option>
                    <option value="th">Thai</option>
                    <option value="th_TH">Thai (Thailand)</option>
                    <option value="bo">Tibetan</option>
                    <option value="bo_CN">Tibetan (China)</option>
                    <option value="bo_IN">Tibetan (India)</option>
                    <option value="ti">Tigrinya</option>
                    <option value="ti_ER">Tigrinya (Eritrea)</option>
                    <option value="ti_ET">Tigrinya (Ethiopia)</option>
                    <option value="to">Tongan</option>
                    <option value="to_TO">Tongan (Tonga)</option>
                    <option value="tr">Turkish</option>
                    <option value="tr_CY">Turkish (Cyprus)</option>
                    <option value="tr_TR">Turkish (Turkey)</option>
                    <option value="uk">Ukrainian</option>
                    <option value="uk_UA">Ukrainian (Ukraine)</option>
                    <option value="ur">Urdu</option>
                    <option value="ur_IN">Urdu (India)</option>
                    <option value="ur_PK">Urdu (Pakistan)</option>
                    <option value="ug">Uyghur</option>
                    <option value="ug_Arab_CN">Uyghur (Arabic, China)</option>
                    <option value="ug_Arab">Uyghur (Arabic)</option>
                    <option value="ug_CN">Uyghur (China)</option>
                    <option value="uz">Uzbek</option>
                    <option value="uz_AF">Uzbek (Afghanistan)</option>
                    <option value="uz_Arab_AF">
                      Uzbek (Arabic, Afghanistan)
                    </option>
                    <option value="uz_Arab">Uzbek (Arabic)</option>
                    <option value="uz_Cyrl_UZ">
                      Uzbek (Cyrillic, Uzbekistan)
                    </option>
                    <option value="uz_Cyrl">Uzbek (Cyrillic)</option>
                    <option value="uz_Latn_UZ">
                      Uzbek (Latin, Uzbekistan)
                    </option>
                    <option value="uz_Latn">Uzbek (Latin)</option>
                    <option value="uz_UZ">Uzbek (Uzbekistan)</option>
                    <option value="vi">Vietnamese</option>
                    <option value="vi_VN">Vietnamese (Vietnam)</option>
                    <option value="cy">Welsh</option>
                    <option value="cy_GB">Welsh (United Kingdom)</option>
                    <option value="fy">Western Frisian</option>
                    <option value="fy_NL">Western Frisian (Netherlands)</option>
                    <option value="yi">Yiddish</option>
                    <option value="yo">Yoruba</option>
                    <option value="yo_BJ">Yoruba (Benin)</option>
                    <option value="yo_NG">Yoruba (Nigeria)</option>
                    <option value="zu">Zulu</option>
                    <option value="zu_ZA">Zulu (South Africa)</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="default_timezone"
                  className="col-md-3 control-label text-left"
                >
                  Default Timezone<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <select
                    name="default_timezone"
                    className="form-control custom-select-black "
                    id="default_timezone"
                  >
                    <option value="Africa/Abidjan">Africa/Abidjan</option>
                    <option value="Africa/Accra">Africa/Accra</option>
                    <option value="Africa/Addis_Ababa">
                      Africa/Addis_Ababa
                    </option>
                    <option value="Africa/Algiers">Africa/Algiers</option>
                    <option value="Africa/Asmara">Africa/Asmara</option>
                    <option value="Africa/Bamako">Africa/Bamako</option>
                    <option value="Africa/Bangui">Africa/Bangui</option>
                    <option value="Africa/Banjul">Africa/Banjul</option>
                    <option value="Africa/Bissau">Africa/Bissau</option>
                    <option value="Africa/Blantyre">Africa/Blantyre</option>
                    <option value="Africa/Brazzaville">
                      Africa/Brazzaville
                    </option>
                    <option value="Africa/Bujumbura">Africa/Bujumbura</option>
                    <option value="Africa/Cairo">Africa/Cairo</option>
                    <option value="Africa/Casablanca">Africa/Casablanca</option>
                    <option value="Africa/Ceuta">Africa/Ceuta</option>
                    <option value="Africa/Conakry">Africa/Conakry</option>
                    <option value="Africa/Dakar">Africa/Dakar</option>
                    <option value="Africa/Dar_es_Salaam">
                      Africa/Dar_es_Salaam
                    </option>
                    <option value="Africa/Djibouti">Africa/Djibouti</option>
                    <option value="Africa/Douala">Africa/Douala</option>
                    <option value="Africa/El_Aaiun">Africa/El_Aaiun</option>
                    <option value="Africa/Freetown">Africa/Freetown</option>
                    <option value="Africa/Gaborone">Africa/Gaborone</option>
                    <option value="Africa/Harare">Africa/Harare</option>
                    <option value="Africa/Johannesburg">
                      Africa/Johannesburg
                    </option>
                    <option value="Africa/Juba">Africa/Juba</option>
                    <option value="Africa/Kampala">Africa/Kampala</option>
                    <option value="Africa/Khartoum">Africa/Khartoum</option>
                    <option value="Africa/Kigali">Africa/Kigali</option>
                    <option value="Africa/Kinshasa">Africa/Kinshasa</option>
                    <option value="Africa/Lagos">Africa/Lagos</option>
                    <option value="Africa/Libreville">Africa/Libreville</option>
                    <option value="Africa/Lome">Africa/Lome</option>
                    <option value="Africa/Luanda">Africa/Luanda</option>
                    <option value="Africa/Lubumbashi">Africa/Lubumbashi</option>
                    <option value="Africa/Lusaka">Africa/Lusaka</option>
                    <option value="Africa/Malabo">Africa/Malabo</option>
                    <option value="Africa/Maputo">Africa/Maputo</option>
                    <option value="Africa/Maseru">Africa/Maseru</option>
                    <option value="Africa/Mbabane">Africa/Mbabane</option>
                    <option value="Africa/Mogadishu">Africa/Mogadishu</option>
                    <option value="Africa/Monrovia">Africa/Monrovia</option>
                    <option value="Africa/Nairobi">Africa/Nairobi</option>
                    <option value="Africa/Ndjamena">Africa/Ndjamena</option>
                    <option value="Africa/Niamey">Africa/Niamey</option>
                    <option value="Africa/Nouakchott">Africa/Nouakchott</option>
                    <option value="Africa/Ouagadougou">
                      Africa/Ouagadougou
                    </option>
                    <option value="Africa/Porto-Novo">Africa/Porto-Novo</option>
                    <option value="Africa/Sao_Tome">Africa/Sao_Tome</option>
                    <option value="Africa/Tripoli">Africa/Tripoli</option>
                    <option value="Africa/Tunis">Africa/Tunis</option>
                    <option value="Africa/Windhoek">Africa/Windhoek</option>
                    <option value="America/Adak">America/Adak</option>
                    <option value="America/Anchorage">America/Anchorage</option>
                    <option value="America/Anguilla">America/Anguilla</option>
                    <option value="America/Antigua">America/Antigua</option>
                    <option value="America/Araguaina">America/Araguaina</option>
                    <option value="America/Argentina/Buenos_Aires">
                      America/Argentina/Buenos_Aires
                    </option>
                    <option value="America/Argentina/Catamarca">
                      America/Argentina/Catamarca
                    </option>
                    <option value="America/Argentina/Cordoba">
                      America/Argentina/Cordoba
                    </option>
                    <option value="America/Argentina/Jujuy">
                      America/Argentina/Jujuy
                    </option>
                    <option value="America/Argentina/La_Rioja">
                      America/Argentina/La_Rioja
                    </option>
                    <option value="America/Argentina/Mendoza">
                      America/Argentina/Mendoza
                    </option>
                    <option value="America/Argentina/Rio_Gallegos">
                      America/Argentina/Rio_Gallegos
                    </option>
                    <option value="America/Argentina/Salta">
                      America/Argentina/Salta
                    </option>
                    <option value="America/Argentina/San_Juan">
                      America/Argentina/San_Juan
                    </option>
                    <option value="America/Argentina/San_Luis">
                      America/Argentina/San_Luis
                    </option>
                    <option value="America/Argentina/Tucuman">
                      America/Argentina/Tucuman
                    </option>
                    <option value="America/Argentina/Ushuaia">
                      America/Argentina/Ushuaia
                    </option>
                    <option value="America/Aruba">America/Aruba</option>
                    <option value="America/Asuncion">America/Asuncion</option>
                    <option value="America/Atikokan">America/Atikokan</option>
                    <option value="America/Bahia">America/Bahia</option>
                    <option value="America/Bahia_Banderas">
                      America/Bahia_Banderas
                    </option>
                    <option value="America/Barbados">America/Barbados</option>
                    <option value="America/Belem">America/Belem</option>
                    <option value="America/Belize">America/Belize</option>
                    <option value="America/Blanc-Sablon">
                      America/Blanc-Sablon
                    </option>
                    <option value="America/Boa_Vista">America/Boa_Vista</option>
                    <option value="America/Bogota">America/Bogota</option>
                    <option value="America/Boise">America/Boise</option>
                    <option value="America/Cambridge_Bay">
                      America/Cambridge_Bay
                    </option>
                    <option value="America/Campo_Grande">
                      America/Campo_Grande
                    </option>
                    <option value="America/Cancun">America/Cancun</option>
                    <option value="America/Caracas">America/Caracas</option>
                    <option value="America/Cayenne">America/Cayenne</option>
                    <option value="America/Cayman">America/Cayman</option>
                    <option value="America/Chicago">America/Chicago</option>
                    <option value="America/Chihuahua">America/Chihuahua</option>
                    <option value="America/Costa_Rica">
                      America/Costa_Rica
                    </option>
                    <option value="America/Creston">America/Creston</option>
                    <option value="America/Cuiaba">America/Cuiaba</option>
                    <option value="America/Curacao">America/Curacao</option>
                    <option value="America/Danmarkshavn">
                      America/Danmarkshavn
                    </option>
                    <option value="America/Dawson">America/Dawson</option>
                    <option value="America/Dawson_Creek">
                      America/Dawson_Creek
                    </option>
                    <option value="America/Denver">America/Denver</option>
                    <option value="America/Detroit">America/Detroit</option>
                    <option value="America/Dominica">America/Dominica</option>
                    <option value="America/Edmonton">America/Edmonton</option>
                    <option value="America/Eirunepe">America/Eirunepe</option>
                    <option value="America/El_Salvador">
                      America/El_Salvador
                    </option>
                    <option value="America/Fort_Nelson">
                      America/Fort_Nelson
                    </option>
                    <option value="America/Fortaleza">America/Fortaleza</option>
                    <option value="America/Glace_Bay">America/Glace_Bay</option>
                    <option value="America/Goose_Bay">America/Goose_Bay</option>
                    <option value="America/Grand_Turk">
                      America/Grand_Turk
                    </option>
                    <option value="America/Grenada">America/Grenada</option>
                    <option value="America/Guadeloupe">
                      America/Guadeloupe
                    </option>
                    <option value="America/Guatemala">America/Guatemala</option>
                    <option value="America/Guayaquil">America/Guayaquil</option>
                    <option value="America/Guyana">America/Guyana</option>
                    <option value="America/Halifax">America/Halifax</option>
                    <option value="America/Havana">America/Havana</option>
                    <option value="America/Hermosillo">
                      America/Hermosillo
                    </option>
                    <option value="America/Indiana/Indianapolis">
                      America/Indiana/Indianapolis
                    </option>
                    <option value="America/Indiana/Knox">
                      America/Indiana/Knox
                    </option>
                    <option value="America/Indiana/Marengo">
                      America/Indiana/Marengo
                    </option>
                    <option value="America/Indiana/Petersburg">
                      America/Indiana/Petersburg
                    </option>
                    <option value="America/Indiana/Tell_City">
                      America/Indiana/Tell_City
                    </option>
                    <option value="America/Indiana/Vevay">
                      America/Indiana/Vevay
                    </option>
                    <option value="America/Indiana/Vincennes">
                      America/Indiana/Vincennes
                    </option>
                    <option value="America/Indiana/Winamac">
                      America/Indiana/Winamac
                    </option>
                    <option value="America/Inuvik">America/Inuvik</option>
                    <option value="America/Iqaluit">America/Iqaluit</option>
                    <option value="America/Jamaica">America/Jamaica</option>
                    <option value="America/Juneau">America/Juneau</option>
                    <option value="America/Kentucky/Louisville">
                      America/Kentucky/Louisville
                    </option>
                    <option value="America/Kentucky/Monticello">
                      America/Kentucky/Monticello
                    </option>
                    <option value="America/Kralendijk">
                      America/Kralendijk
                    </option>
                    <option value="America/La_Paz">America/La_Paz</option>
                    <option value="America/Lima">America/Lima</option>
                    <option value="America/Los_Angeles">
                      America/Los_Angeles
                    </option>
                    <option value="America/Lower_Princes">
                      America/Lower_Princes
                    </option>
                    <option value="America/Maceio">America/Maceio</option>
                    <option value="America/Managua">America/Managua</option>
                    <option value="America/Manaus">America/Manaus</option>
                    <option value="America/Marigot">America/Marigot</option>
                    <option value="America/Martinique">
                      America/Martinique
                    </option>
                    <option value="America/Matamoros">America/Matamoros</option>
                    <option value="America/Mazatlan">America/Mazatlan</option>
                    <option value="America/Menominee">America/Menominee</option>
                    <option value="America/Merida">America/Merida</option>
                    <option value="America/Metlakatla">
                      America/Metlakatla
                    </option>
                    <option value="America/Mexico_City">
                      America/Mexico_City
                    </option>
                    <option value="America/Miquelon">America/Miquelon</option>
                    <option value="America/Moncton">America/Moncton</option>
                    <option value="America/Monterrey">America/Monterrey</option>
                    <option value="America/Montevideo">
                      America/Montevideo
                    </option>
                    <option value="America/Montserrat">
                      America/Montserrat
                    </option>
                    <option value="America/Nassau">America/Nassau</option>
                    <option value="America/New_York">America/New_York</option>
                    <option value="America/Nipigon">America/Nipigon</option>
                    <option value="America/Nome">America/Nome</option>
                    <option value="America/Noronha">America/Noronha</option>
                    <option value="America/North_Dakota/Beulah">
                      America/North_Dakota/Beulah
                    </option>
                    <option value="America/North_Dakota/Center">
                      America/North_Dakota/Center
                    </option>
                    <option value="America/North_Dakota/New_Salem">
                      America/North_Dakota/New_Salem
                    </option>
                    <option value="America/Nuuk">America/Nuuk</option>
                    <option value="America/Ojinaga">America/Ojinaga</option>
                    <option value="America/Panama">America/Panama</option>
                    <option value="America/Pangnirtung">
                      America/Pangnirtung
                    </option>
                    <option value="America/Paramaribo">
                      America/Paramaribo
                    </option>
                    <option value="America/Phoenix">America/Phoenix</option>
                    <option value="America/Port-au-Prince">
                      America/Port-au-Prince
                    </option>
                    <option value="America/Port_of_Spain">
                      America/Port_of_Spain
                    </option>
                    <option value="America/Porto_Velho">
                      America/Porto_Velho
                    </option>
                    <option value="America/Puerto_Rico">
                      America/Puerto_Rico
                    </option>
                    <option value="America/Punta_Arenas">
                      America/Punta_Arenas
                    </option>
                    <option value="America/Rainy_River">
                      America/Rainy_River
                    </option>
                    <option value="America/Rankin_Inlet">
                      America/Rankin_Inlet
                    </option>
                    <option value="America/Recife">America/Recife</option>
                    <option value="America/Regina">America/Regina</option>
                    <option value="America/Resolute">America/Resolute</option>
                    <option value="America/Rio_Branco">
                      America/Rio_Branco
                    </option>
                    <option value="America/Santarem">America/Santarem</option>
                    <option value="America/Santiago">America/Santiago</option>
                    <option value="America/Santo_Domingo">
                      America/Santo_Domingo
                    </option>
                    <option value="America/Sao_Paulo">America/Sao_Paulo</option>
                    <option value="America/Scoresbysund">
                      America/Scoresbysund
                    </option>
                    <option value="America/Sitka">America/Sitka</option>
                    <option value="America/St_Barthelemy">
                      America/St_Barthelemy
                    </option>
                    <option value="America/St_Johns">America/St_Johns</option>
                    <option value="America/St_Kitts">America/St_Kitts</option>
                    <option value="America/St_Lucia">America/St_Lucia</option>
                    <option value="America/St_Thomas">America/St_Thomas</option>
                    <option value="America/St_Vincent">
                      America/St_Vincent
                    </option>
                    <option value="America/Swift_Current">
                      America/Swift_Current
                    </option>
                    <option value="America/Tegucigalpa">
                      America/Tegucigalpa
                    </option>
                    <option value="America/Thule">America/Thule</option>
                    <option value="America/Thunder_Bay">
                      America/Thunder_Bay
                    </option>
                    <option value="America/Tijuana">America/Tijuana</option>
                    <option value="America/Toronto">America/Toronto</option>
                    <option value="America/Tortola">America/Tortola</option>
                    <option value="America/Vancouver">America/Vancouver</option>
                    <option value="America/Whitehorse">
                      America/Whitehorse
                    </option>
                    <option value="America/Winnipeg">America/Winnipeg</option>
                    <option value="America/Yakutat">America/Yakutat</option>
                    <option value="America/Yellowknife">
                      America/Yellowknife
                    </option>
                    <option value="Antarctica/Casey">Antarctica/Casey</option>
                    <option value="Antarctica/Davis">Antarctica/Davis</option>
                    <option value="Antarctica/DumontDUrville">
                      Antarctica/DumontDUrville
                    </option>
                    <option value="Antarctica/Macquarie">
                      Antarctica/Macquarie
                    </option>
                    <option value="Antarctica/Mawson">Antarctica/Mawson</option>
                    <option value="Antarctica/McMurdo">
                      Antarctica/McMurdo
                    </option>
                    <option value="Antarctica/Palmer">Antarctica/Palmer</option>
                    <option value="Antarctica/Rothera">
                      Antarctica/Rothera
                    </option>
                    <option value="Antarctica/Syowa">Antarctica/Syowa</option>
                    <option value="Antarctica/Troll">Antarctica/Troll</option>
                    <option value="Antarctica/Vostok">Antarctica/Vostok</option>
                    <option value="Arctic/Longyearbyen">
                      Arctic/Longyearbyen
                    </option>
                    <option value="Asia/Aden">Asia/Aden</option>
                    <option value="Asia/Almaty">Asia/Almaty</option>
                    <option value="Asia/Amman">Asia/Amman</option>
                    <option value="Asia/Anadyr">Asia/Anadyr</option>
                    <option value="Asia/Aqtau">Asia/Aqtau</option>
                    <option value="Asia/Aqtobe">Asia/Aqtobe</option>
                    <option value="Asia/Ashgabat">Asia/Ashgabat</option>
                    <option value="Asia/Atyrau">Asia/Atyrau</option>
                    <option value="Asia/Baghdad">Asia/Baghdad</option>
                    <option value="Asia/Bahrain">Asia/Bahrain</option>
                    <option value="Asia/Baku">Asia/Baku</option>
                    <option value="Asia/Bangkok">Asia/Bangkok</option>
                    <option value="Asia/Barnaul">Asia/Barnaul</option>
                    <option value="Asia/Beirut">Asia/Beirut</option>
                    <option value="Asia/Bishkek">Asia/Bishkek</option>
                    <option value="Asia/Brunei">Asia/Brunei</option>
                    <option value="Asia/Chita">Asia/Chita</option>
                    <option value="Asia/Choibalsan">Asia/Choibalsan</option>
                    <option value="Asia/Colombo">Asia/Colombo</option>
                    <option value="Asia/Damascus">Asia/Damascus</option>
                    <option value="Asia/Dhaka">Asia/Dhaka</option>
                    <option value="Asia/Dili">Asia/Dili</option>
                    <option value="Asia/Dubai">Asia/Dubai</option>
                    <option value="Asia/Dushanbe">Asia/Dushanbe</option>
                    <option value="Asia/Famagusta">Asia/Famagusta</option>
                    <option value="Asia/Gaza">Asia/Gaza</option>
                    <option value="Asia/Hebron">Asia/Hebron</option>
                    <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh</option>
                    <option value="Asia/Hong_Kong">Asia/Hong_Kong</option>
                    <option value="Asia/Hovd">Asia/Hovd</option>
                    <option value="Asia/Irkutsk">Asia/Irkutsk</option>
                    <option value="Asia/Jakarta">Asia/Jakarta</option>
                    <option value="Asia/Jayapura">Asia/Jayapura</option>
                    <option value="Asia/Jerusalem">Asia/Jerusalem</option>
                    <option value="Asia/Kabul">Asia/Kabul</option>
                    <option value="Asia/Kamchatka">Asia/Kamchatka</option>
                    <option value="Asia/Karachi">Asia/Karachi</option>
                    <option value="Asia/Kathmandu">Asia/Kathmandu</option>
                    <option value="Asia/Khandyga">Asia/Khandyga</option>
                    <option value="Asia/Kolkata">Asia/Kolkata</option>
                    <option value="Asia/Krasnoyarsk">Asia/Krasnoyarsk</option>
                    <option value="Asia/Kuala_Lumpur">Asia/Kuala_Lumpur</option>
                    <option value="Asia/Kuching">Asia/Kuching</option>
                    <option value="Asia/Kuwait">Asia/Kuwait</option>
                    <option value="Asia/Macau">Asia/Macau</option>
                    <option value="Asia/Magadan">Asia/Magadan</option>
                    <option value="Asia/Makassar">Asia/Makassar</option>
                    <option value="Asia/Manila">Asia/Manila</option>
                    <option value="Asia/Muscat">Asia/Muscat</option>
                    <option value="Asia/Nicosia">Asia/Nicosia</option>
                    <option value="Asia/Novokuznetsk">Asia/Novokuznetsk</option>
                    <option value="Asia/Novosibirsk">Asia/Novosibirsk</option>
                    <option value="Asia/Omsk">Asia/Omsk</option>
                    <option value="Asia/Oral">Asia/Oral</option>
                    <option value="Asia/Phnom_Penh">Asia/Phnom_Penh</option>
                    <option value="Asia/Pontianak">Asia/Pontianak</option>
                    <option value="Asia/Pyongyang">Asia/Pyongyang</option>
                    <option value="Asia/Qatar">Asia/Qatar</option>
                    <option value="Asia/Qostanay">Asia/Qostanay</option>
                    <option value="Asia/Qyzylorda">Asia/Qyzylorda</option>
                    <option value="Asia/Riyadh">Asia/Riyadh</option>
                    <option value="Asia/Sakhalin">Asia/Sakhalin</option>
                    <option value="Asia/Samarkand">Asia/Samarkand</option>
                    <option value="Asia/Seoul">Asia/Seoul</option>
                    <option value="Asia/Shanghai">Asia/Shanghai</option>
                    <option value="Asia/Singapore">Asia/Singapore</option>
                    <option value="Asia/Srednekolymsk">
                      Asia/Srednekolymsk
                    </option>
                    <option value="Asia/Taipei">Asia/Taipei</option>
                    <option value="Asia/Tashkent">Asia/Tashkent</option>
                    <option value="Asia/Tbilisi">Asia/Tbilisi</option>
                    <option value="Asia/Tehran">Asia/Tehran</option>
                    <option value="Asia/Thimphu">Asia/Thimphu</option>
                    <option value="Asia/Tokyo">Asia/Tokyo</option>
                    <option value="Asia/Tomsk">Asia/Tomsk</option>
                    <option value="Asia/Ulaanbaatar">Asia/Ulaanbaatar</option>
                    <option value="Asia/Urumqi">Asia/Urumqi</option>
                    <option value="Asia/Ust-Nera">Asia/Ust-Nera</option>
                    <option value="Asia/Vientiane">Asia/Vientiane</option>
                    <option value="Asia/Vladivostok">Asia/Vladivostok</option>
                    <option value="Asia/Yakutsk">Asia/Yakutsk</option>
                    <option value="Asia/Yangon">Asia/Yangon</option>
                    <option value="Asia/Yekaterinburg">
                      Asia/Yekaterinburg
                    </option>
                    <option value="Asia/Yerevan">Asia/Yerevan</option>
                    <option value="Atlantic/Azores">Atlantic/Azores</option>
                    <option value="Atlantic/Bermuda">Atlantic/Bermuda</option>
                    <option value="Atlantic/Canary">Atlantic/Canary</option>
                    <option value="Atlantic/Cape_Verde">
                      Atlantic/Cape_Verde
                    </option>
                    <option value="Atlantic/Faroe">Atlantic/Faroe</option>
                    <option value="Atlantic/Madeira">Atlantic/Madeira</option>
                    <option value="Atlantic/Reykjavik">
                      Atlantic/Reykjavik
                    </option>
                    <option value="Atlantic/South_Georgia">
                      Atlantic/South_Georgia
                    </option>
                    <option value="Atlantic/St_Helena">
                      Atlantic/St_Helena
                    </option>
                    <option value="Atlantic/Stanley">Atlantic/Stanley</option>
                    <option value="Australia/Adelaide">
                      Australia/Adelaide
                    </option>
                    <option value="Australia/Brisbane">
                      Australia/Brisbane
                    </option>
                    <option value="Australia/Broken_Hill">
                      Australia/Broken_Hill
                    </option>
                    <option value="Australia/Darwin">Australia/Darwin</option>
                    <option value="Australia/Eucla">Australia/Eucla</option>
                    <option value="Australia/Hobart">Australia/Hobart</option>
                    <option value="Australia/Lindeman">
                      Australia/Lindeman
                    </option>
                    <option value="Australia/Lord_Howe">
                      Australia/Lord_Howe
                    </option>
                    <option value="Australia/Melbourne">
                      Australia/Melbourne
                    </option>
                    <option value="Australia/Perth">Australia/Perth</option>
                    <option value="Australia/Sydney">Australia/Sydney</option>
                    <option value="Europe/Amsterdam">Europe/Amsterdam</option>
                    <option value="Europe/Andorra">Europe/Andorra</option>
                    <option value="Europe/Astrakhan">Europe/Astrakhan</option>
                    <option value="Europe/Athens">Europe/Athens</option>
                    <option value="Europe/Belgrade">Europe/Belgrade</option>
                    <option value="Europe/Berlin">Europe/Berlin</option>
                    <option value="Europe/Bratislava">Europe/Bratislava</option>
                    <option value="Europe/Brussels">Europe/Brussels</option>
                    <option value="Europe/Bucharest">Europe/Bucharest</option>
                    <option value="Europe/Budapest">Europe/Budapest</option>
                    <option value="Europe/Busingen">Europe/Busingen</option>
                    <option value="Europe/Chisinau">Europe/Chisinau</option>
                    <option value="Europe/Copenhagen">Europe/Copenhagen</option>
                    <option value="Europe/Dublin">Europe/Dublin</option>
                    <option value="Europe/Gibraltar">Europe/Gibraltar</option>
                    <option value="Europe/Guernsey">Europe/Guernsey</option>
                    <option value="Europe/Helsinki">Europe/Helsinki</option>
                    <option value="Europe/Isle_of_Man">
                      Europe/Isle_of_Man
                    </option>
                    <option value="Europe/Istanbul">Europe/Istanbul</option>
                    <option value="Europe/Jersey">Europe/Jersey</option>
                    <option value="Europe/Kaliningrad">
                      Europe/Kaliningrad
                    </option>
                    <option value="Europe/Kiev">Europe/Kiev</option>
                    <option value="Europe/Kirov">Europe/Kirov</option>
                    <option value="Europe/Lisbon">Europe/Lisbon</option>
                    <option value="Europe/Ljubljana">Europe/Ljubljana</option>
                    <option value="Europe/London">Europe/London</option>
                    <option value="Europe/Luxembourg">Europe/Luxembourg</option>
                    <option value="Europe/Madrid">Europe/Madrid</option>
                    <option value="Europe/Malta">Europe/Malta</option>
                    <option value="Europe/Mariehamn">Europe/Mariehamn</option>
                    <option value="Europe/Minsk">Europe/Minsk</option>
                    <option value="Europe/Monaco">Europe/Monaco</option>
                    <option value="Europe/Moscow">Europe/Moscow</option>
                    <option value="Europe/Oslo">Europe/Oslo</option>
                    <option value="Europe/Paris">Europe/Paris</option>
                    <option value="Europe/Podgorica">Europe/Podgorica</option>
                    <option value="Europe/Prague">Europe/Prague</option>
                    <option value="Europe/Riga">Europe/Riga</option>
                    <option value="Europe/Rome">Europe/Rome</option>
                    <option value="Europe/Samara">Europe/Samara</option>
                    <option value="Europe/San_Marino">Europe/San_Marino</option>
                    <option value="Europe/Sarajevo">Europe/Sarajevo</option>
                    <option value="Europe/Saratov">Europe/Saratov</option>
                    <option value="Europe/Simferopol">Europe/Simferopol</option>
                    <option value="Europe/Skopje">Europe/Skopje</option>
                    <option value="Europe/Sofia">Europe/Sofia</option>
                    <option value="Europe/Stockholm">Europe/Stockholm</option>
                    <option value="Europe/Tallinn">Europe/Tallinn</option>
                    <option value="Europe/Tirane">Europe/Tirane</option>
                    <option value="Europe/Ulyanovsk">Europe/Ulyanovsk</option>
                    <option value="Europe/Uzhgorod">Europe/Uzhgorod</option>
                    <option value="Europe/Vaduz">Europe/Vaduz</option>
                    <option value="Europe/Vatican">Europe/Vatican</option>
                    <option value="Europe/Vienna">Europe/Vienna</option>
                    <option value="Europe/Vilnius">Europe/Vilnius</option>
                    <option value="Europe/Volgograd">Europe/Volgograd</option>
                    <option value="Europe/Warsaw">Europe/Warsaw</option>
                    <option value="Europe/Zagreb">Europe/Zagreb</option>
                    <option value="Europe/Zaporozhye">Europe/Zaporozhye</option>
                    <option value="Europe/Zurich">Europe/Zurich</option>
                    <option value="Indian/Antananarivo">
                      Indian/Antananarivo
                    </option>
                    <option value="Indian/Chagos">Indian/Chagos</option>
                    <option value="Indian/Christmas">Indian/Christmas</option>
                    <option value="Indian/Cocos">Indian/Cocos</option>
                    <option value="Indian/Comoro">Indian/Comoro</option>
                    <option value="Indian/Kerguelen">Indian/Kerguelen</option>
                    <option value="Indian/Mahe">Indian/Mahe</option>
                    <option value="Indian/Maldives">Indian/Maldives</option>
                    <option value="Indian/Mauritius">Indian/Mauritius</option>
                    <option value="Indian/Mayotte">Indian/Mayotte</option>
                    <option value="Indian/Reunion">Indian/Reunion</option>
                    <option value="Pacific/Apia">Pacific/Apia</option>
                    <option value="Pacific/Auckland">Pacific/Auckland</option>
                    <option value="Pacific/Bougainville">
                      Pacific/Bougainville
                    </option>
                    <option value="Pacific/Chatham">Pacific/Chatham</option>
                    <option value="Pacific/Chuuk">Pacific/Chuuk</option>
                    <option value="Pacific/Easter">Pacific/Easter</option>
                    <option value="Pacific/Efate">Pacific/Efate</option>
                    <option value="Pacific/Enderbury">Pacific/Enderbury</option>
                    <option value="Pacific/Fakaofo">Pacific/Fakaofo</option>
                    <option value="Pacific/Fiji">Pacific/Fiji</option>
                    <option value="Pacific/Funafuti">Pacific/Funafuti</option>
                    <option value="Pacific/Galapagos">Pacific/Galapagos</option>
                    <option value="Pacific/Gambier">Pacific/Gambier</option>
                    <option value="Pacific/Guadalcanal">
                      Pacific/Guadalcanal
                    </option>
                    <option value="Pacific/Guam">Pacific/Guam</option>
                    <option value="Pacific/Honolulu">Pacific/Honolulu</option>
                    <option value="Pacific/Kiritimati">
                      Pacific/Kiritimati
                    </option>
                    <option value="Pacific/Kosrae">Pacific/Kosrae</option>
                    <option value="Pacific/Kwajalein">Pacific/Kwajalein</option>
                    <option value="Pacific/Majuro">Pacific/Majuro</option>
                    <option value="Pacific/Marquesas">Pacific/Marquesas</option>
                    <option value="Pacific/Midway">Pacific/Midway</option>
                    <option value="Pacific/Nauru">Pacific/Nauru</option>
                    <option value="Pacific/Niue">Pacific/Niue</option>
                    <option value="Pacific/Norfolk">Pacific/Norfolk</option>
                    <option value="Pacific/Noumea">Pacific/Noumea</option>
                    <option value="Pacific/Pago_Pago">Pacific/Pago_Pago</option>
                    <option value="Pacific/Palau">Pacific/Palau</option>
                    <option value="Pacific/Pitcairn">Pacific/Pitcairn</option>
                    <option value="Pacific/Pohnpei">Pacific/Pohnpei</option>
                    <option value="Pacific/Port_Moresby">
                      Pacific/Port_Moresby
                    </option>
                    <option value="Pacific/Rarotonga">Pacific/Rarotonga</option>
                    <option value="Pacific/Saipan">Pacific/Saipan</option>
                    <option value="Pacific/Tahiti">Pacific/Tahiti</option>
                    <option value="Pacific/Tarawa">Pacific/Tarawa</option>
                    <option value="Pacific/Tongatapu">Pacific/Tongatapu</option>
                    <option value="Pacific/Wake">Pacific/Wake</option>
                    <option value="Pacific/Wallis">Pacific/Wallis</option>
                    <option value="UTC" selected>
                      UTC
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="customer_role"
                  className="col-md-3 control-label text-left"
                >
                  Customer Role<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <select
                    name="customer_role"
                    className="form-control custom-select-black "
                    id="customer_role"
                  >
                    <option value={1}>Admin</option>
                    <option value={2} selected>
                      Customer
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="reviews_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Reviews &amp; Ratings
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="reviews_enabled"
                    />
                    <input
                      type="checkbox"
                      name="reviews_enabled"
                      className
                      id="reviews_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="reviews_enabled">
                      Allow customers to give reviews &amp; ratings
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="auto_approve_reviews"
                  className="col-md-3 control-label text-left"
                >
                  Auto Approve Reviews
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="auto_approve_reviews"
                    />
                    <input
                      type="checkbox"
                      name="auto_approve_reviews"
                      className
                      id="auto_approve_reviews"
                      defaultValue={1}
                    />
                    <label htmlFor="auto_approve_reviews">
                      Customer reviews will be approved automatically
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="cookie_bar_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Cookie Bar
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="cookie_bar_enabled"
                    />
                    <input
                      type="checkbox"
                      name="cookie_bar_enabled"
                      className
                      id="cookie_bar_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="cookie_bar_enabled">
                      Show cookie bar in your website
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "maintenance") {
      return (
        <div className="tab-pane fade in active" id="maintenance">
          <h3 className="tab-content-title">Maintenance</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="maintenance_mode"
                  className="col-md-3 control-label text-left"
                >
                  Maintenance Mode
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="maintenance_mode"
                    />
                    <input
                      type="checkbox"
                      name="maintenance_mode"
                      className
                      id="maintenance_mode"
                      defaultValue={1}
                    />
                    <label htmlFor="maintenance_mode">
                      Put the application into maintenance mode
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "store") {
      return (
        <div className="tab-pane fade in active" id="store">
          <h3 className="tab-content-title">Store</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="box-content clearfix">
                <div className="form-group">
                  <label
                    htmlFor="translatable[store_name]"
                    className="col-md-3 control-label text-left"
                  >
                    Store Name<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[store_name]"
                      className="form-control "
                      id="translatable[store_name]"
                      defaultValue="FleetCart"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="translatable[store_tagline]"
                    className="col-md-3 control-label text-left"
                  >
                    Store Tagline
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[store_tagline]"
                      className="form-control "
                      id="translatable[store_tagline]"
                      defaultValue
                      rows={2}
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="store_email"
                    className="col-md-3 control-label text-left"
                  >
                    Store Email<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="store_email"
                      className="form-control "
                      id="store_email"
                      defaultValue="admin@email.com"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="store_phone"
                    className="col-md-3 control-label text-left"
                  >
                    Store Phone<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="store_phone"
                      className="form-control "
                      id="store_phone"
                      defaultValue={+990123456789}
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="store_address_1"
                    className="col-md-3 control-label text-left"
                  >
                    Store Address 1
                  </label>
                  <div className="col-md-9">
                    <input
                      name="store_address_1"
                      className="form-control "
                      id="store_address_1"
                      defaultValue="Palli Bidyut, Savar"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="store_address_2"
                    className="col-md-3 control-label text-left"
                  >
                    Store Address 2
                  </label>
                  <div className="col-md-9">
                    <input
                      name="store_address_2"
                      className="form-control "
                      id="store_address_2"
                      defaultValue
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="store_city"
                    className="col-md-3 control-label text-left"
                  >
                    Store City
                  </label>
                  <div className="col-md-9">
                    <input
                      name="store_city"
                      className="form-control "
                      id="store_city"
                      defaultValue="Dhaka"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="store_country"
                    className="col-md-3 control-label text-left"
                  >
                    Store Country
                  </label>
                  <div className="col-md-9">
                    <select
                      name="store_country"
                      className="form-control custom-select-black "
                      id="store_country"
                    >
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Åland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua &amp; Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AC">Ascension Island</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD" selected>
                        Bangladesh
                      </option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia</option>
                      <option value="BA">Bosnia &amp; Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="VG">British Virgin Islands</option>
                      <option value="BN">Brunei</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="IC">Canary Islands</option>
                      <option value="CV">Cape Verde</option>
                      <option value="BQ">Caribbean Netherlands</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="EA">Ceuta &amp; Melilla</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo - Brazzaville</option>
                      <option value="CD">Congo - Kinshasa</option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Côte d’Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curaçao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czechia</option>
                      <option value="DK">Denmark</option>
                      <option value="DG">Diego Garcia</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="EZ">Eurozone</option>
                      <option value="FK">Falkland Islands</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong SAR China</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="XK">Kosovo</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Laos</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macau SAR China</option>
                      <option value="MK">Macedonia</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">Micronesia</option>
                      <option value="MD">Moldova</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar (Burma)</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="KP">North Korea</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestinian Territories</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn Islands</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Réunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russia</option>
                      <option value="RW">Rwanda</option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">São Tomé &amp; Príncipe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">
                        South Georgia &amp; South Sandwich Islands
                      </option>
                      <option value="KR">South Korea</option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="BL">St. Barthélemy</option>
                      <option value="SH">St. Helena</option>
                      <option value="KN">St. Kitts &amp; Nevis</option>
                      <option value="LC">St. Lucia</option>
                      <option value="MF">St. Martin</option>
                      <option value="PM">St. Pierre &amp; Miquelon</option>
                      <option value="VC">St. Vincent &amp; Grenadines</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard &amp; Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syria</option>
                      <option value="TW">Taiwan</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad &amp; Tobago</option>
                      <option value="TA">Tristan da Cunha</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks &amp; Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UM">U.S. Outlying Islands</option>
                      <option value="VI">U.S. Virgin Islands</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="UN">United Nations</option>
                      <option value="US">United States</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VA">Vatican City</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN">Vietnam</option>
                      <option value="WF">Wallis &amp; Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                  </div>
                </div>
                <div className="store-state input">
                  <div className="form-group">
                    <label
                      htmlFor="store_state"
                      className="col-md-3 control-label text-left"
                    >
                      Store State
                    </label>
                    <div className="col-md-9">
                      <input
                        name="store_state"
                        className="form-control "
                        id="store_state"
                        defaultValue="DHA"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="store-state select hide">
                  <div className="form-group">
                    <label
                      htmlFor="store_state"
                      className="col-md-3 control-label text-left"
                    >
                      Store State
                    </label>
                    <div className="col-md-9">
                      <select
                        name="store_state"
                        className="form-control custom-select-black "
                        id="store_state"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="store_zip"
                    className="col-md-3 control-label text-left"
                  >
                    Store Zip
                  </label>
                  <div className="col-md-9">
                    <input
                      name="store_zip"
                      className="form-control "
                      id="store_zip"
                      defaultValue={1344}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Privacy Settings</h4>
                <div className="form-group">
                  <label
                    htmlFor="store_phone_hide"
                    className="col-md-3 control-label text-left"
                  >
                    Hide Store Phone
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        defaultValue={0}
                        name="store_phone_hide"
                      />
                      <input
                        type="checkbox"
                        name="store_phone_hide"
                        className
                        id="store_phone_hide"
                        defaultValue={1}
                      />
                      <label htmlFor="store_phone_hide">
                        Hide store phone from the storefront
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="store_email_hide"
                    className="col-md-3 control-label text-left"
                  >
                    Hide Store Email
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        defaultValue={0}
                        name="store_email_hide"
                      />
                      <input
                        type="checkbox"
                        name="store_email_hide"
                        className
                        id="store_email_hide"
                        defaultValue={1}
                      />
                      <label htmlFor="store_email_hide">
                        Hide store email from the storefront
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "currency") {
      return (
        <div className="tab-pane fade in active" id="currency">
          <h3 className="tab-content-title">Currency</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="supported_currencies[]"
                  className="col-md-3 control-label text-left"
                >
                  Supported Currencies<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <select
                    name="supported_currencies[]"
                    className="form-control custom-select-black selectize prevent-creation"
                    id="supported_currencies[]"
                    multiple={1}
                  >
                    <option value="AFN">Afghan Afghani</option>
                    <option value="ALL">Albanian Lek</option>
                    <option value="DZD">Algerian Dinar</option>
                    <option value="AOA">Angolan Kwanza</option>
                    <option value="ARS">Argentine Peso</option>
                    <option value="AMD">Armenian Dram</option>
                    <option value="AWG">Aruban Florin</option>
                    <option value="AUD">Australian Dollar</option>
                    <option value="AZN">Azerbaijani Manat</option>
                    <option value="BSD">Bahamian Dollar</option>
                    <option value="BHD">Bahraini Dinar</option>
                    <option value="BDT">Bangladeshi Taka</option>
                    <option value="BBD">Barbadian Dollar</option>
                    <option value="BYN">Belarusian Ruble</option>
                    <option value="BZD">Belize Dollar</option>
                    <option value="BMD">Bermudan Dollar</option>
                    <option value="BTN">Bhutanese Ngultrum</option>
                    <option value="BOB">Bolivian Boliviano</option>
                    <option value="BOV">Bolivian Mvdol</option>
                    <option value="BAM">
                      Bosnia-Herzegovina Convertible Mark
                    </option>
                    <option value="BWP">Botswanan Pula</option>
                    <option value="BRL">Brazilian Real</option>
                    <option value="GBP">British Pound</option>
                    <option value="BND">Brunei Dollar</option>
                    <option value="BGN">Bulgarian Lev</option>
                    <option value="BIF">Burundian Franc</option>
                    <option value="XPF">CFP Franc</option>
                    <option value="KHR">Cambodian Riel</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="CVE">Cape Verdean Escudo</option>
                    <option value="KYD">Cayman Islands Dollar</option>
                    <option value="XAF">Central African CFA Franc</option>
                    <option value="CLP">Chilean Peso</option>
                    <option value="CLF">Chilean Unit of Account (UF)</option>
                    <option value="CNY">Chinese Yuan</option>
                    <option value="COP">Colombian Peso</option>
                    <option value="COU">Colombian Real Value Unit</option>
                    <option value="KMF">Comorian Franc</option>
                    <option value="CDF">Congolese Franc</option>
                    <option value="CRC">Costa Rican Colón</option>
                    <option value="HRK">Croatian Kuna</option>
                    <option value="CUC">Cuban Convertible Peso</option>
                    <option value="CUP">Cuban Peso</option>
                    <option value="CZK">Czech Koruna</option>
                    <option value="DKK">Danish Krone</option>
                    <option value="DJF">Djiboutian Franc</option>
                    <option value="DOP">Dominican Peso</option>
                    <option value="XCD">East Caribbean Dollar</option>
                    <option value="EGP">Egyptian Pound</option>
                    <option value="ERN">Eritrean Nakfa</option>
                    <option value="ETB">Ethiopian Birr</option>
                    <option value="EUR">Euro</option>
                    <option value="FKP">Falkland Islands Pound</option>
                    <option value="FJD">Fijian Dollar</option>
                    <option value="GMD">Gambian Dalasi</option>
                    <option value="GEL">Georgian Lari</option>
                    <option value="GHS">Ghanaian Cedi</option>
                    <option value="GIP">Gibraltar Pound</option>
                    <option value="GTQ">Guatemalan Quetzal</option>
                    <option value="GNF">Guinean Franc</option>
                    <option value="GYD">Guyanaese Dollar</option>
                    <option value="HTG">Haitian Gourde</option>
                    <option value="HNL">Honduran Lempira</option>
                    <option value="HKD">Hong Kong Dollar</option>
                    <option value="HUF">Hungarian Forint</option>
                    <option value="ISK">Icelandic Króna</option>
                    <option value="INR" selected>
                      Indian Rupee
                    </option>
                    <option value="IDR">Indonesian Rupiah</option>
                    <option value="IRR">Iranian Rial</option>
                    <option value="IQD">Iraqi Dinar</option>
                    <option value="ILS">Israeli New Shekel</option>
                    <option value="JMD">Jamaican Dollar</option>
                    <option value="JPY">Japanese Yen</option>
                    <option value="JOD">Jordanian Dinar</option>
                    <option value="KZT">Kazakhstani Tenge</option>
                    <option value="KES">Kenyan Shilling</option>
                    <option value="KWD">Kuwaiti Dinar</option>
                    <option value="KGS">Kyrgystani Som</option>
                    <option value="LAK">Laotian Kip</option>
                    <option value="LBP">Lebanese Pound</option>
                    <option value="LSL">Lesotho Loti</option>
                    <option value="LRD">Liberian Dollar</option>
                    <option value="LYD">Libyan Dinar</option>
                    <option value="MOP">Macanese Pataca</option>
                    <option value="MKD">Macedonian Denar</option>
                    <option value="MGA">Malagasy Ariary</option>
                    <option value="MWK">Malawian Kwacha</option>
                    <option value="MYR">Malaysian Ringgit</option>
                    <option value="MVR">Maldivian Rufiyaa</option>
                    <option value="MRO">Mauritanian Ouguiya</option>
                    <option value="MUR">Mauritian Rupee</option>
                    <option value="MXV">Mexican Investment Unit</option>
                    <option value="MXN">Mexican Peso</option>
                    <option value="MDL">Moldovan Leu</option>
                    <option value="MNT">Mongolian Tugrik</option>
                    <option value="MAD">Moroccan Dirham</option>
                    <option value="MZN">Mozambican Metical</option>
                    <option value="MMK">Myanmar Kyat</option>
                    <option value="NAD">Namibian Dollar</option>
                    <option value="NPR">Nepalese Rupee</option>
                    <option value="ANG">Netherlands Antillean Guilder</option>
                    <option value="TWD">New Taiwan Dollar</option>
                    <option value="NZD">New Zealand Dollar</option>
                    <option value="NIO">Nicaraguan Córdoba</option>
                    <option value="NGN">Nigerian Naira</option>
                    <option value="KPW">North Korean Won</option>
                    <option value="NOK">Norwegian Krone</option>
                    <option value="OMR">Omani Rial</option>
                    <option value="PKR">Pakistani Rupee</option>
                    <option value="PAB">Panamanian Balboa</option>
                    <option value="PGK">Papua New Guinean Kina</option>
                    <option value="PYG">Paraguayan Guarani</option>
                    <option value="PEN">Peruvian Sol</option>
                    <option value="PHP">Philippine Peso</option>
                    <option value="PLN">Polish Zloty</option>
                    <option value="QAR">Qatari Rial</option>
                    <option value="RON">Romanian Leu</option>
                    <option value="RUB">Russian Ruble</option>
                    <option value="RWF">Rwandan Franc</option>
                    <option value="SVC">Salvadoran Colón</option>
                    <option value="WST">Samoan Tala</option>
                    <option value="SAR" selected>
                      Saudi Riyal
                    </option>
                    <option value="RSD">Serbian Dinar</option>
                    <option value="SCR">Seychellois Rupee</option>
                    <option value="SLL">Sierra Leonean Leone</option>
                    <option value="SGD">Singapore Dollar</option>
                    <option value="SBD">Solomon Islands Dollar</option>
                    <option value="SOS">Somali Shilling</option>
                    <option value="ZAR">South African Rand</option>
                    <option value="KRW">South Korean Won</option>
                    <option value="SSP">South Sudanese Pound</option>
                    <option value="LKR">Sri Lankan Rupee</option>
                    <option value="SHP">St. Helena Pound</option>
                    <option value="SDG">Sudanese Pound</option>
                    <option value="SRD">Surinamese Dollar</option>
                    <option value="SZL">Swazi Lilangeni</option>
                    <option value="SEK">Swedish Krona</option>
                    <option value="CHF">Swiss Franc</option>
                    <option value="SYP">Syrian Pound</option>
                    <option value="STD">São Tomé &amp; Príncipe Dobra</option>
                    <option value="TJS">Tajikistani Somoni</option>
                    <option value="TZS">Tanzanian Shilling</option>
                    <option value="THB">Thai Baht</option>
                    <option value="TOP">Tongan Paʻanga</option>
                    <option value="TTD">Trinidad &amp; Tobago Dollar</option>
                    <option value="TND">Tunisian Dinar</option>
                    <option value="TRY">Turkish Lira</option>
                    <option value="TMT">Turkmenistani Manat</option>
                    <option value="USD" selected>
                      US Dollar
                    </option>
                    <option value="UGX">Ugandan Shilling</option>
                    <option value="UAH">Ukrainian Hryvnia</option>
                    <option value="AED">United Arab Emirates Dirham</option>
                    <option value="UYU">Uruguayan Peso</option>
                    <option value="UYI">Uruguayan Peso (Indexed Units)</option>
                    <option value="UZS">Uzbekistani Som</option>
                    <option value="VUV">Vanuatu Vatu</option>
                    <option value="VEF">Venezuelan Bolívar</option>
                    <option value="VND">Vietnamese Dong</option>
                    <option value="CHE">WIR Euro</option>
                    <option value="CHW">WIR Franc</option>
                    <option value="XOF">West African CFA Franc</option>
                    <option value="YER">Yemeni Rial</option>
                    <option value="ZMW">Zambian Kwacha</option>
                    <option value="ZWL">Zimbabwean Dollar</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="default_currency"
                  className="col-md-3 control-label text-left"
                >
                  Default Currency<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <select
                    name="default_currency"
                    className="form-control custom-select-black "
                    id="default_currency"
                  >
                    <option value="AFN">Afghan Afghani</option>
                    <option value="ALL">Albanian Lek</option>
                    <option value="DZD">Algerian Dinar</option>
                    <option value="AOA">Angolan Kwanza</option>
                    <option value="ARS">Argentine Peso</option>
                    <option value="AMD">Armenian Dram</option>
                    <option value="AWG">Aruban Florin</option>
                    <option value="AUD">Australian Dollar</option>
                    <option value="AZN">Azerbaijani Manat</option>
                    <option value="BSD">Bahamian Dollar</option>
                    <option value="BHD">Bahraini Dinar</option>
                    <option value="BDT">Bangladeshi Taka</option>
                    <option value="BBD">Barbadian Dollar</option>
                    <option value="BYN">Belarusian Ruble</option>
                    <option value="BZD">Belize Dollar</option>
                    <option value="BMD">Bermudan Dollar</option>
                    <option value="BTN">Bhutanese Ngultrum</option>
                    <option value="BOB">Bolivian Boliviano</option>
                    <option value="BOV">Bolivian Mvdol</option>
                    <option value="BAM">
                      Bosnia-Herzegovina Convertible Mark
                    </option>
                    <option value="BWP">Botswanan Pula</option>
                    <option value="BRL">Brazilian Real</option>
                    <option value="GBP">British Pound</option>
                    <option value="BND">Brunei Dollar</option>
                    <option value="BGN">Bulgarian Lev</option>
                    <option value="BIF">Burundian Franc</option>
                    <option value="XPF">CFP Franc</option>
                    <option value="KHR">Cambodian Riel</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="CVE">Cape Verdean Escudo</option>
                    <option value="KYD">Cayman Islands Dollar</option>
                    <option value="XAF">Central African CFA Franc</option>
                    <option value="CLP">Chilean Peso</option>
                    <option value="CLF">Chilean Unit of Account (UF)</option>
                    <option value="CNY">Chinese Yuan</option>
                    <option value="COP">Colombian Peso</option>
                    <option value="COU">Colombian Real Value Unit</option>
                    <option value="KMF">Comorian Franc</option>
                    <option value="CDF">Congolese Franc</option>
                    <option value="CRC">Costa Rican Colón</option>
                    <option value="HRK">Croatian Kuna</option>
                    <option value="CUC">Cuban Convertible Peso</option>
                    <option value="CUP">Cuban Peso</option>
                    <option value="CZK">Czech Koruna</option>
                    <option value="DKK">Danish Krone</option>
                    <option value="DJF">Djiboutian Franc</option>
                    <option value="DOP">Dominican Peso</option>
                    <option value="XCD">East Caribbean Dollar</option>
                    <option value="EGP">Egyptian Pound</option>
                    <option value="ERN">Eritrean Nakfa</option>
                    <option value="ETB">Ethiopian Birr</option>
                    <option value="EUR">Euro</option>
                    <option value="FKP">Falkland Islands Pound</option>
                    <option value="FJD">Fijian Dollar</option>
                    <option value="GMD">Gambian Dalasi</option>
                    <option value="GEL">Georgian Lari</option>
                    <option value="GHS">Ghanaian Cedi</option>
                    <option value="GIP">Gibraltar Pound</option>
                    <option value="GTQ">Guatemalan Quetzal</option>
                    <option value="GNF">Guinean Franc</option>
                    <option value="GYD">Guyanaese Dollar</option>
                    <option value="HTG">Haitian Gourde</option>
                    <option value="HNL">Honduran Lempira</option>
                    <option value="HKD">Hong Kong Dollar</option>
                    <option value="HUF">Hungarian Forint</option>
                    <option value="ISK">Icelandic Króna</option>
                    <option value="INR">Indian Rupee</option>
                    <option value="IDR">Indonesian Rupiah</option>
                    <option value="IRR">Iranian Rial</option>
                    <option value="IQD">Iraqi Dinar</option>
                    <option value="ILS">Israeli New Shekel</option>
                    <option value="JMD">Jamaican Dollar</option>
                    <option value="JPY">Japanese Yen</option>
                    <option value="JOD">Jordanian Dinar</option>
                    <option value="KZT">Kazakhstani Tenge</option>
                    <option value="KES">Kenyan Shilling</option>
                    <option value="KWD">Kuwaiti Dinar</option>
                    <option value="KGS">Kyrgystani Som</option>
                    <option value="LAK">Laotian Kip</option>
                    <option value="LBP">Lebanese Pound</option>
                    <option value="LSL">Lesotho Loti</option>
                    <option value="LRD">Liberian Dollar</option>
                    <option value="LYD">Libyan Dinar</option>
                    <option value="MOP">Macanese Pataca</option>
                    <option value="MKD">Macedonian Denar</option>
                    <option value="MGA">Malagasy Ariary</option>
                    <option value="MWK">Malawian Kwacha</option>
                    <option value="MYR">Malaysian Ringgit</option>
                    <option value="MVR">Maldivian Rufiyaa</option>
                    <option value="MRO">Mauritanian Ouguiya</option>
                    <option value="MUR">Mauritian Rupee</option>
                    <option value="MXV">Mexican Investment Unit</option>
                    <option value="MXN">Mexican Peso</option>
                    <option value="MDL">Moldovan Leu</option>
                    <option value="MNT">Mongolian Tugrik</option>
                    <option value="MAD">Moroccan Dirham</option>
                    <option value="MZN">Mozambican Metical</option>
                    <option value="MMK">Myanmar Kyat</option>
                    <option value="NAD">Namibian Dollar</option>
                    <option value="NPR">Nepalese Rupee</option>
                    <option value="ANG">Netherlands Antillean Guilder</option>
                    <option value="TWD">New Taiwan Dollar</option>
                    <option value="NZD">New Zealand Dollar</option>
                    <option value="NIO">Nicaraguan Córdoba</option>
                    <option value="NGN">Nigerian Naira</option>
                    <option value="KPW">North Korean Won</option>
                    <option value="NOK">Norwegian Krone</option>
                    <option value="OMR">Omani Rial</option>
                    <option value="PKR">Pakistani Rupee</option>
                    <option value="PAB">Panamanian Balboa</option>
                    <option value="PGK">Papua New Guinean Kina</option>
                    <option value="PYG">Paraguayan Guarani</option>
                    <option value="PEN">Peruvian Sol</option>
                    <option value="PHP">Philippine Peso</option>
                    <option value="PLN">Polish Zloty</option>
                    <option value="QAR">Qatari Rial</option>
                    <option value="RON">Romanian Leu</option>
                    <option value="RUB">Russian Ruble</option>
                    <option value="RWF">Rwandan Franc</option>
                    <option value="SVC">Salvadoran Colón</option>
                    <option value="WST">Samoan Tala</option>
                    <option value="SAR">Saudi Riyal</option>
                    <option value="RSD">Serbian Dinar</option>
                    <option value="SCR">Seychellois Rupee</option>
                    <option value="SLL">Sierra Leonean Leone</option>
                    <option value="SGD">Singapore Dollar</option>
                    <option value="SBD">Solomon Islands Dollar</option>
                    <option value="SOS">Somali Shilling</option>
                    <option value="ZAR">South African Rand</option>
                    <option value="KRW">South Korean Won</option>
                    <option value="SSP">South Sudanese Pound</option>
                    <option value="LKR">Sri Lankan Rupee</option>
                    <option value="SHP">St. Helena Pound</option>
                    <option value="SDG">Sudanese Pound</option>
                    <option value="SRD">Surinamese Dollar</option>
                    <option value="SZL">Swazi Lilangeni</option>
                    <option value="SEK">Swedish Krona</option>
                    <option value="CHF">Swiss Franc</option>
                    <option value="SYP">Syrian Pound</option>
                    <option value="STD">São Tomé &amp; Príncipe Dobra</option>
                    <option value="TJS">Tajikistani Somoni</option>
                    <option value="TZS">Tanzanian Shilling</option>
                    <option value="THB">Thai Baht</option>
                    <option value="TOP">Tongan Paʻanga</option>
                    <option value="TTD">Trinidad &amp; Tobago Dollar</option>
                    <option value="TND">Tunisian Dinar</option>
                    <option value="TRY">Turkish Lira</option>
                    <option value="TMT">Turkmenistani Manat</option>
                    <option value="USD" selected>
                      US Dollar
                    </option>
                    <option value="UGX">Ugandan Shilling</option>
                    <option value="UAH">Ukrainian Hryvnia</option>
                    <option value="AED">United Arab Emirates Dirham</option>
                    <option value="UYU">Uruguayan Peso</option>
                    <option value="UYI">Uruguayan Peso (Indexed Units)</option>
                    <option value="UZS">Uzbekistani Som</option>
                    <option value="VUV">Vanuatu Vatu</option>
                    <option value="VEF">Venezuelan Bolívar</option>
                    <option value="VND">Vietnamese Dong</option>
                    <option value="CHE">WIR Euro</option>
                    <option value="CHW">WIR Franc</option>
                    <option value="XOF">West African CFA Franc</option>
                    <option value="YER">Yemeni Rial</option>
                    <option value="ZMW">Zambian Kwacha</option>
                    <option value="ZWL">Zimbabwean Dollar</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="currency_rate_exchange_service"
                  className="col-md-3 control-label text-left"
                >
                  Exchange Rate Service
                </label>
                <div className="col-md-9">
                  <select
                    name="currency_rate_exchange_service"
                    className="form-control custom-select-black "
                    id="currency_rate_exchange_service"
                  >
                    <option value>Select Service</option>
                    <option value="fixer">Fixer</option>
                    <option value="forge">Forge</option>
                    <option value="currency_data_feed">
                      Currency Data Feed
                    </option>
                  </select>
                </div>
              </div>
              <div
                className="currency-rate-exchange-service hide"
                id="-service"
              ></div>
              <div
                className="currency-rate-exchange-service hide"
                id="fixer-service"
              >
                <div className="form-group">
                  <label
                    htmlFor="fixer_access_key"
                    className="col-md-3 control-label text-left"
                  >
                    Fixer Access key<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="fixer_access_key"
                      className="form-control "
                      id="fixer_access_key"
                      defaultValue
                      type="password"
                    />
                  </div>
                </div>
              </div>
              <div
                className="currency-rate-exchange-service hide"
                id="forge-service"
              >
                <div className="form-group">
                  <label
                    htmlFor="forge_api_key"
                    className="col-md-3 control-label text-left"
                  >
                    Forge API key<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="forge_api_key"
                      className="form-control "
                      id="forge_api_key"
                      defaultValue
                      type="password"
                    />
                  </div>
                </div>
              </div>
              <div
                className="currency-rate-exchange-service hide"
                id="currency_data_feed-service"
              >
                <div className="form-group">
                  <label
                    htmlFor="currency_data_feed_api_key"
                    className="col-md-3 control-label text-left"
                  >
                    Currency Data Feed API Key
                    <span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="currency_data_feed_api_key"
                      className="form-control "
                      id="currency_data_feed_api_key"
                      defaultValue
                      type="password"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="auto_refresh_currency_rates"
                  className="col-md-3 control-label text-left"
                >
                  Auto Refresh
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="auto_refresh_currency_rates"
                    />
                    <input
                      type="checkbox"
                      name="auto_refresh_currency_rates"
                      className
                      id="auto_refresh_currency_rates"
                      defaultValue={1}
                    />
                    <label htmlFor="auto_refresh_currency_rates">
                      Enable auto-refreshing currency rates
                    </label>
                  </div>
                </div>
              </div>
              <div className="hide" id="auto-refresh-frequency-field">
                <div className="form-group">
                  <label
                    htmlFor="auto_refresh_currency_rate_frequency"
                    className="col-md-3 control-label text-left"
                  >
                    Frequency<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <select
                      name="auto_refresh_currency_rate_frequency"
                      className="form-control custom-select-black "
                      id="auto_refresh_currency_rate_frequency"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly" selected>
                        Weekly
                      </option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "sms") {
      return (
        <div className="tab-pane fade in active" id="sms">
          <h3 className="tab-content-title">SMS</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="box-content clearfix">
                <div className="form-group">
                  <label
                    htmlFor="sms_from"
                    className="col-md-3 control-label text-left"
                  >
                    SMS From
                  </label>
                  <div className="col-md-9">
                    <input
                      name="sms_from"
                      className="form-control "
                      id="sms_from"
                      defaultValue
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="sms_service"
                    className="col-md-3 control-label text-left"
                  >
                    SMS Service
                  </label>
                  <div className="col-md-9">
                    <select
                      name="sms_service"
                      className="form-control custom-select-black "
                      id="sms_service"
                    >
                      <option value>Select Service</option>
                      <option value="vonage">Vonage</option>
                      <option value="twilio">Twilio</option>
                    </select>
                  </div>
                </div>
                <div className="sms-service hide" id="-service"></div>
                <div className="sms-service hide" id="vonage-service">
                  <div className="form-group">
                    <label
                      htmlFor="vonage_key"
                      className="col-md-3 control-label text-left"
                    >
                      API Key<span className="m-l-5 text-red">*</span>
                    </label>
                    <div className="col-md-9">
                      <input
                        name="vonage_key"
                        className="form-control "
                        id="vonage_key"
                        defaultValue
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="vonage_secret"
                      className="col-md-3 control-label text-left"
                    >
                      API Secret<span className="m-l-5 text-red">*</span>
                    </label>
                    <div className="col-md-9">
                      <input
                        name="vonage_secret"
                        className="form-control "
                        id="vonage_secret"
                        defaultValue
                        type="password"
                      />
                    </div>
                  </div>
                </div>
                <div className="sms-service hide" id="twilio-service">
                  <div className="form-group">
                    <label
                      htmlFor="twilio_sid"
                      className="col-md-3 control-label text-left"
                    >
                      Account SID<span className="m-l-5 text-red">*</span>
                    </label>
                    <div className="col-md-9">
                      <input
                        name="twilio_sid"
                        className="form-control "
                        id="twilio_sid"
                        defaultValue
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="twilio_token"
                      className="col-md-3 control-label text-left"
                    >
                      Auth Token<span className="m-l-5 text-red">*</span>
                    </label>
                    <div className="col-md-9">
                      <input
                        name="twilio_token"
                        className="form-control "
                        id="twilio_token"
                        defaultValue
                        type="password"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">
                  Customer Notification Settings
                </h4>
                <div className="form-group">
                  <label
                    htmlFor="welcome_sms"
                    className="col-md-3 control-label text-left"
                  >
                    Welcome SMS
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        defaultValue={0}
                        name="welcome_sms"
                      />
                      <input
                        type="checkbox"
                        name="welcome_sms"
                        className
                        id="welcome_sms"
                        defaultValue={1}
                      />
                      <label htmlFor="welcome_sms">
                        Send welcome SMS after registration
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Order Notification Settings</h4>
                <div className="form-group">
                  <label
                    htmlFor="new_order_admin_sms"
                    className="col-md-3 control-label text-left"
                  >
                    New Order Admin SMS
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        defaultValue={0}
                        name="new_order_admin_sms"
                      />
                      <input
                        type="checkbox"
                        name="new_order_admin_sms"
                        className
                        id="new_order_admin_sms"
                        defaultValue={1}
                      />
                      <label htmlFor="new_order_admin_sms">
                        Send new order notification to the admin
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="new_order_sms"
                    className="col-md-3 control-label text-left"
                  >
                    New Order SMS
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        defaultValue={0}
                        name="new_order_sms"
                      />
                      <input
                        type="checkbox"
                        name="new_order_sms"
                        className
                        id="new_order_sms"
                        defaultValue={1}
                      />
                      <label htmlFor="new_order_sms">
                        Send new order notification to the customer
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="sms_order_statuses[]"
                    className="col-md-3 control-label text-left"
                  >
                    SMS Order Statuses
                  </label>
                  <div className="col-md-9">
                    <select
                      name="sms_order_statuses[]"
                      className="form-control custom-select-black selectize prevent-creation"
                      id="sms_order_statuses[]"
                      multiple={1}
                    >
                      <option value="canceled">Canceled</option>
                      <option value="completed">Completed</option>
                      <option value="on_hold">On Hold</option>
                      <option value="pending">Pending</option>
                      <option value="pending_payment">Pending Payment</option>
                      <option value="processing">Processing</option>
                      <option value="refunded">Refunded</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "mail") {
      return (
        <div className="tab-pane fade in active" id="mail">
          <h3 className="tab-content-title">Mail</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="box-content clearfix">
                <div className="form-group">
                  <label
                    htmlFor="mail_from_address"
                    className="col-md-3 control-label text-left"
                  >
                    Mail From Address
                  </label>
                  <div className="col-md-9">
                    <input
                      name="mail_from_address"
                      className="form-control "
                      id="mail_from_address"
                      defaultValue="customerservice@fleetcart.envaysoft.com"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="mail_from_name"
                    className="col-md-3 control-label text-left"
                  >
                    Mail From Name
                  </label>
                  <div className="col-md-9">
                    <input
                      name="mail_from_name"
                      className="form-control "
                      id="mail_from_name"
                      defaultValue="Customer Service"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="mail_host"
                    className="col-md-3 control-label text-left"
                  >
                    Mail Host
                  </label>
                  <div className="col-md-9">
                    <input
                      name="mail_host"
                      className="form-control "
                      id="mail_host"
                      defaultValue
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="mail_port"
                    className="col-md-3 control-label text-left"
                  >
                    Mail Port
                  </label>
                  <div className="col-md-9">
                    <input
                      name="mail_port"
                      className="form-control "
                      id="mail_port"
                      defaultValue
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="mail_username"
                    className="col-md-3 control-label text-left"
                  >
                    Mail Username
                  </label>
                  <div className="col-md-9">
                    <input
                      name="mail_username"
                      className="form-control "
                      id="mail_username"
                      defaultValue
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="mail_password"
                    className="col-md-3 control-label text-left"
                  >
                    Mail Password
                  </label>
                  <div className="col-md-9">
                    <input
                      name="mail_password"
                      className="form-control "
                      id="mail_password"
                      defaultValue
                      type="password"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="mail_encryption"
                    className="col-md-3 control-label text-left"
                  >
                    Mail Encryption
                  </label>
                  <div className="col-md-9">
                    <select
                      name="mail_encryption"
                      className="form-control custom-select-black "
                      id="mail_encryption"
                    >
                      <option value>Please Select</option>
                      <option value="ssl">SSL</option>
                      <option value="tls">Tls</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">
                  Customer Notification Settings
                </h4>
                <div className="form-group">
                  <label
                    htmlFor="welcome_email"
                    className="col-md-3 control-label text-left"
                  >
                    Welcome Email
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        defaultValue={0}
                        name="welcome_email"
                      />
                      <input
                        type="checkbox"
                        name="welcome_email"
                        className
                        id="welcome_email"
                        defaultValue={1}
                      />
                      <label htmlFor="welcome_email">
                        Send welcome email after registration
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Order Notification Settings</h4>
                <div className="form-group">
                  <label
                    htmlFor="admin_order_email"
                    className="col-md-3 control-label text-left"
                  >
                    New Order Admin Email
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        defaultValue={0}
                        name="admin_order_email"
                      />
                      <input
                        type="checkbox"
                        name="admin_order_email"
                        className
                        id="admin_order_email"
                        defaultValue={1}
                      />
                      <label htmlFor="admin_order_email">
                        Send new order notification to the admin
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="invoice_email"
                    className="col-md-3 control-label text-left"
                  >
                    Invoice Email
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        defaultValue={0}
                        name="invoice_email"
                      />
                      <input
                        type="checkbox"
                        name="invoice_email"
                        className
                        id="invoice_email"
                        defaultValue={1}
                      />
                      <label htmlFor="invoice_email">
                        Send invoice email to the customer after checkout
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="email_order_statuses[]"
                    className="col-md-3 control-label text-left"
                  >
                    Email Order Statuses
                  </label>
                  <div className="col-md-9">
                    <select
                      name="email_order_statuses[]"
                      className="form-control custom-select-black selectize prevent-creation"
                      id="email_order_statuses[]"
                      multiple={1}
                    >
                      <option value="canceled">Canceled</option>
                      <option value="completed">Completed</option>
                      <option value="on_hold">On Hold</option>
                      <option value="pending">Pending</option>
                      <option value="pending_payment">Pending Payment</option>
                      <option value="processing">Processing</option>
                      <option value="refunded">Refunded</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "newsletter") {
      return (
        <div className="tab-pane fade in active" id="newsletter">
          <h3 className="tab-content-title">Newsletter</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="newsletter_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Newsletter
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="newsletter_enabled"
                    />
                    <input
                      type="checkbox"
                      name="newsletter_enabled"
                      className
                      id="newsletter_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="newsletter_enabled">
                      Allow customers to subscribe to your newsletter
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="mailchimp_api_key"
                  className="col-md-3 control-label text-left"
                >
                  Mailchimp API Key
                </label>
                <div className="col-md-9">
                  <input
                    name="mailchimp_api_key"
                    className="form-control "
                    id="mailchimp_api_key"
                    defaultValue
                    type="password"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="mailchimp_list_id"
                  className="col-md-3 control-label text-left"
                >
                  Mailchimp List ID
                </label>
                <div className="col-md-9">
                  <input
                    name="mailchimp_list_id"
                    className="form-control "
                    id="mailchimp_list_id"
                    defaultValue
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "customcssjs") {
      return (
        <div className="tab-pane fade in active" id="custom_css_js">
          <h3 className="tab-content-title">Custom CSS/JS</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="custom_header_assets"
                  className="col-md-3 control-label text-left"
                >
                  Header
                </label>
                <div className="col-md-9">
                  <textarea
                    name="custom_header_assets"
                    className="form-control "
                    id="custom_header_assets"
                    rows={10}
                    cols={10}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="custom_footer_assets"
                  className="col-md-3 control-label text-left"
                >
                  Footer
                </label>
                <div className="col-md-9">
                  <textarea
                    name="custom_footer_assets"
                    className="form-control "
                    id="custom_footer_assets"
                    rows={10}
                    cols={10}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "facebook") {
      return (
        <div className="tab-pane fade in active" id="facebook">
          <h3 className="tab-content-title">Facebook</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="facebook_login_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="facebook_login_enabled"
                    />
                    <input
                      type="checkbox"
                      name="facebook_login_enabled"
                      className
                      id="facebook_login_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="facebook_login_enabled">
                      Enable Facebook Login
                    </label>
                  </div>
                </div>
              </div>
              <div className id="facebook-login-fields">
                <div className="form-group">
                  <label
                    htmlFor="facebook_login_app_id"
                    className="col-md-3 control-label text-left"
                  >
                    App ID<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="facebook_login_app_id"
                      className="form-control "
                      id="facebook_login_app_id"
                      defaultValue
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="facebook_login_app_secret"
                    className="col-md-3 control-label text-left"
                  >
                    App Secret<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="facebook_login_app_secret"
                      className="form-control "
                      id="facebook_login_app_secret"
                      defaultValue
                      type="password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "google") {
      return (
        <div className="tab-pane fade in active" id="google">
          <h3 className="tab-content-title">Google</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="google_login_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="google_login_enabled"
                    />
                    <input
                      type="checkbox"
                      name="google_login_enabled"
                      className
                      id="google_login_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="google_login_enabled">
                      Enable Google Login
                    </label>
                  </div>
                </div>
              </div>
              <div className id="google-login-fields">
                <div className="form-group">
                  <label
                    htmlFor="google_login_client_id"
                    className="col-md-3 control-label text-left"
                  >
                    Client ID<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="google_login_client_id"
                      className="form-control "
                      id="google_login_client_id"
                      defaultValue
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="google_login_client_secret"
                    className="col-md-3 control-label text-left"
                  >
                    Client Secret<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="google_login_client_secret"
                      className="form-control "
                      id="google_login_client_secret"
                      defaultValue
                      type="password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "freeshipping") {
      return (
        <div className="tab-pane fade in active" id="free_shipping">
          <h3 className="tab-content-title">Free Shipping</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="free_shipping_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="free_shipping_enabled"
                    />
                    <input
                      type="checkbox"
                      name="free_shipping_enabled"
                      className
                      id="free_shipping_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="free_shipping_enabled">
                      Enable Free Shipping
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[free_shipping_label]"
                  className="col-md-3 control-label text-left"
                >
                  Label<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[free_shipping_label]"
                    className="form-control "
                    id="translatable[free_shipping_label]"
                    defaultValue="Free Shipping"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="free_shipping_min_amount"
                  className="col-md-3 control-label text-left"
                >
                  Minimum Amount
                </label>
                <div className="col-md-9">
                  <input
                    name="free_shipping_min_amount"
                    className="form-control "
                    id="free_shipping_min_amount"
                    defaultValue
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "localpickup") {
      return (
        <div className="tab-pane fade in active" id="local_pickup">
          <h3 className="tab-content-title">Local Pickup</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="local_pickup_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="local_pickup_enabled"
                    />
                    <input
                      type="checkbox"
                      name="local_pickup_enabled"
                      className
                      id="local_pickup_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="local_pickup_enabled">
                      Enable Local Pickup
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[local_pickup_label]"
                  className="col-md-3 control-label text-left"
                >
                  Label<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[local_pickup_label]"
                    className="form-control "
                    id="translatable[local_pickup_label]"
                    defaultValue="Local Pickup"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="local_pickup_cost"
                  className="col-md-3 control-label text-left"
                >
                  Cost<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="local_pickup_cost"
                    className="form-control "
                    id="local_pickup_cost"
                    defaultValue={20}
                    min={0}
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "flatrate") {
      return (
        <div className="tab-pane fade in active" id="flat_rate">
          <h3 className="tab-content-title">Flat Rate</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="flat_rate_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="flat_rate_enabled"
                    />
                    <input
                      type="checkbox"
                      name="flat_rate_enabled"
                      className
                      id="flat_rate_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="flat_rate_enabled">Enable Flat Rate</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[flat_rate_label]"
                  className="col-md-3 control-label text-left"
                >
                  Label<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[flat_rate_label]"
                    className="form-control "
                    id="translatable[flat_rate_label]"
                    defaultValue="Flat Rate"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="flat_rate_cost"
                  className="col-md-3 control-label text-left"
                >
                  Cost<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="flat_rate_cost"
                    className="form-control "
                    id="flat_rate_cost"
                    defaultValue={25}
                    min={0}
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "paypal") {
      return (
        <div className="tab-pane fade in active" id="paypal">
          <h3 className="tab-content-title">PayPal</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="paypal_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="paypal_enabled"
                    />
                    <input
                      type="checkbox"
                      name="paypal_enabled"
                      className
                      id="paypal_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="paypal_enabled">Enable PayPal</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[paypal_label]"
                  className="col-md-3 control-label text-left"
                >
                  Label<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[paypal_label]"
                    className="form-control "
                    id="translatable[paypal_label]"
                    defaultValue="PayPal"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[paypal_description]"
                  className="col-md-3 control-label text-left"
                >
                  Description<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <textarea
                    name="translatable[paypal_description]"
                    className="form-control "
                    id="translatable[paypal_description]"
                    rows={3}
                    cols={10}
                    defaultValue={"Pay via your PayPal account."}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="paypal_test_mode"
                  className="col-md-3 control-label text-left"
                >
                  Sandbox
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="paypal_test_mode"
                    />
                    <input
                      type="checkbox"
                      name="paypal_test_mode"
                      className
                      id="paypal_test_mode"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="paypal_test_mode">
                      Use sandbox for test payments
                    </label>
                  </div>
                </div>
              </div>
              <div className id="paypal-fields">
                <div className="form-group">
                  <label
                    htmlFor="paypal_client_id"
                    className="col-md-3 control-label text-left"
                  >
                    Client ID<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="paypal_client_id"
                      className="form-control "
                      id="paypal_client_id"
                      defaultValue
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="paypal_secret"
                    className="col-md-3 control-label text-left"
                  >
                    Secret<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="paypal_secret"
                      className="form-control "
                      id="paypal_secret"
                      defaultValue
                      type="password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "stripe") {
      return (
        <div className="tab-pane fade in active" id="stripe">
          <h3 className="tab-content-title">Stripe</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="stripe_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="stripe_enabled"
                    />
                    <input
                      type="checkbox"
                      name="stripe_enabled"
                      className
                      id="stripe_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="stripe_enabled">Enable Stripe</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[stripe_label]"
                  className="col-md-3 control-label text-left"
                >
                  Label<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[stripe_label]"
                    className="form-control "
                    id="translatable[stripe_label]"
                    defaultValue="Stripe"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[stripe_description]"
                  className="col-md-3 control-label text-left"
                >
                  Description<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <textarea
                    name="translatable[stripe_description]"
                    className="form-control "
                    id="translatable[stripe_description]"
                    rows={3}
                    cols={10}
                    defaultValue={"Pay via credit or debit card."}
                  />
                </div>
              </div>
              <div className id="stripe-fields">
                <div className="form-group">
                  <label
                    htmlFor="stripe_publishable_key"
                    className="col-md-3 control-label text-left"
                  >
                    Publishable Key<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="stripe_publishable_key"
                      className="form-control "
                      id="stripe_publishable_key"
                      defaultValue
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="stripe_secret_key"
                    className="col-md-3 control-label text-left"
                  >
                    Secret Key<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="stripe_secret_key"
                      className="form-control "
                      id="stripe_secret_key"
                      defaultValue
                      type="password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "paytm") {
      return (
        <div className="tab-pane fade in active" id="paytm">
          <h3 className="tab-content-title">Paytm</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="paytm_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="paytm_enabled"
                    />
                    <input
                      type="checkbox"
                      name="paytm_enabled"
                      className
                      id="paytm_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="paytm_enabled">Enable Paytm</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[paytm_label]"
                  className="col-md-3 control-label text-left"
                >
                  Label<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[paytm_label]"
                    className="form-control "
                    id="translatable[paytm_label]"
                    defaultValue="Paytm"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[paytm_description]"
                  className="col-md-3 control-label text-left"
                >
                  Description<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <textarea
                    name="translatable[paytm_description]"
                    className="form-control "
                    id="translatable[paytm_description]"
                    rows={3}
                    cols={10}
                    defaultValue={
                      "The best payment gateway provider in India for e-payment through credit card, debit card & net banking."
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="paytm_test_mode"
                  className="col-md-3 control-label text-left"
                >
                  Sandbox
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="paytm_test_mode"
                    />
                    <input
                      type="checkbox"
                      name="paytm_test_mode"
                      className
                      id="paytm_test_mode"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="paytm_test_mode">
                      Use sandbox for test payments
                    </label>
                  </div>
                </div>
              </div>
              <div className id="paytm-fields">
                <div className="form-group">
                  <label
                    htmlFor="paytm_merchant_id"
                    className="col-md-3 control-label text-left"
                  >
                    Merchant ID<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="paytm_merchant_id"
                      className="form-control "
                      id="paytm_merchant_id"
                      defaultValue
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="paytm_merchant_key"
                    className="col-md-3 control-label text-left"
                  >
                    Merchant Key<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="paytm_merchant_key"
                      className="form-control "
                      id="paytm_merchant_key"
                      defaultValue
                      type="password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "razorpay") {
      return (
        <div className="tab-pane fade in active" id="razorpay">
          <h3 className="tab-content-title">Razorpay</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="razorpay_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="razorpay_enabled"
                    />
                    <input
                      type="checkbox"
                      name="razorpay_enabled"
                      className
                      id="razorpay_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="razorpay_enabled">Enable Razorpay</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[razorpay_label]"
                  className="col-md-3 control-label text-left"
                >
                  Label<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[razorpay_label]"
                    className="form-control "
                    id="translatable[razorpay_label]"
                    defaultValue="Razorpay"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[razorpay_description]"
                  className="col-md-3 control-label text-left"
                >
                  Description<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <textarea
                    name="translatable[razorpay_description]"
                    className="form-control "
                    id="translatable[razorpay_description]"
                    rows={3}
                    cols={10}
                    defaultValue={
                      "Pay securely by Credit or Debit card or Internet Banking through Razorpay."
                    }
                  />
                </div>
              </div>
              <div className id="razorpay-fields">
                <div className="form-group">
                  <label
                    htmlFor="razorpay_key_id"
                    className="col-md-3 control-label text-left"
                  >
                    Key Id<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="razorpay_key_id"
                      className="form-control "
                      id="razorpay_key_id"
                      defaultValue
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="razorpay_key_secret"
                    className="col-md-3 control-label text-left"
                  >
                    Key Secret<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="razorpay_key_secret"
                      className="form-control "
                      id="razorpay_key_secret"
                      defaultValue
                      type="password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "instamojo") {
      return (
        <div className="tab-pane fade in active" id="instamojo">
          <h3 className="tab-content-title">Instamojo</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="instamojo_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="instamojo_enabled"
                    />
                    <input
                      type="checkbox"
                      name="instamojo_enabled"
                      className
                      id="instamojo_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="instamojo_enabled">Enable Instamojo</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[instamojo_label]"
                  className="col-md-3 control-label text-left"
                >
                  Label<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[instamojo_label]"
                    className="form-control "
                    id="translatable[instamojo_label]"
                    defaultValue="Instamojo"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[instamojo_description]"
                  className="col-md-3 control-label text-left"
                >
                  Description<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <textarea
                    name="translatable[instamojo_description]"
                    className="form-control "
                    id="translatable[instamojo_description]"
                    rows={3}
                    cols={10}
                    defaultValue={"CC/DB/NB/Wallets"}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="instamojo_test_mode"
                  className="col-md-3 control-label text-left"
                >
                  Sandbox
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="instamojo_test_mode"
                    />
                    <input
                      type="checkbox"
                      name="instamojo_test_mode"
                      className
                      id="instamojo_test_mode"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="instamojo_test_mode">
                      Use sandbox for test payments
                    </label>
                  </div>
                </div>
              </div>
              <div className id="instamojo-fields">
                <div className="form-group">
                  <label
                    htmlFor="instamojo_api_key"
                    className="col-md-3 control-label text-left"
                  >
                    API Key<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="instamojo_api_key"
                      className="form-control "
                      id="instamojo_api_key"
                      defaultValue
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="instamojo_auth_token"
                    className="col-md-3 control-label text-left"
                  >
                    Auth Token<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="instamojo_auth_token"
                      className="form-control "
                      id="instamojo_auth_token"
                      defaultValue
                      type="password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "cash") {
      return (
        <div className="tab-pane fade in active" id="cod">
          <h3 className="tab-content-title">Cash On Delivery</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="cod_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input type="hidden" defaultValue={0} name="cod_enabled" />
                    <input
                      type="checkbox"
                      name="cod_enabled"
                      className
                      id="cod_enabled"
                      defaultValue={1}
                    />
                    <label htmlFor="cod_enabled">Enable Cash On Delivery</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[cod_label]"
                  className="col-md-3 control-label text-left"
                >
                  Label<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[cod_label]"
                    className="form-control "
                    id="translatable[cod_label]"
                    defaultValue="Cash On Delivery"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[cod_description]"
                  className="col-md-3 control-label text-left"
                >
                  Description<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <textarea
                    name="translatable[cod_description]"
                    className="form-control "
                    id="translatable[cod_description]"
                    rows={3}
                    cols={10}
                    defaultValue={"Pay with cash upon delivery."}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "banktransfer") {
      return (
        <div className="tab-pane fade in active" id="bank_transfer">
          <h3 className="tab-content-title">Bank Transfer</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="bank_transfer_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="bank_transfer_enabled"
                    />
                    <input
                      type="checkbox"
                      name="bank_transfer_enabled"
                      className
                      id="bank_transfer_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="bank_transfer_enabled">
                      Enable Bank Transfer
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[bank_transfer_label]"
                  className="col-md-3 control-label text-left"
                >
                  Label<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[bank_transfer_label]"
                    className="form-control "
                    id="translatable[bank_transfer_label]"
                    defaultValue="Bank Transfer"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[bank_transfer_description]"
                  className="col-md-3 control-label text-left"
                >
                  Description<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <textarea
                    name="translatable[bank_transfer_description]"
                    className="form-control "
                    id="translatable[bank_transfer_description]"
                    rows={3}
                    cols={10}
                    defaultValue={
                      "Make your payment directly into our bank account. Please use your Order ID as the payment reference."
                    }
                  />
                </div>
              </div>
              <div className id="bank-transfer-fields">
                <div className="form-group">
                  <label
                    htmlFor="translatable[bank_transfer_instructions]"
                    className="col-md-3 control-label text-left"
                  >
                    Instructions<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <textarea
                      name="translatable[bank_transfer_instructions]"
                      className="form-control "
                      id="translatable[bank_transfer_instructions]"
                      rows={3}
                      cols={10}
                      defaultValue={
                        "Please send your payment to the following account.\n<br>\nBank Name: Lorem Ipsum.\n<br>\nBeneficiary Name: John Doe.\n<br>\nAccount Number/IBAN: 123456789"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "check") {
      return (
        <div className="tab-pane fade in active" id="check_payment">
          <h3 className="tab-content-title">Check / Money Order</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="check_payment_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="check_payment_enabled"
                    />
                    <input
                      type="checkbox"
                      name="check_payment_enabled"
                      className
                      id="check_payment_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="check_payment_enabled">
                      Enable Check / Money Order
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[check_payment_label]"
                  className="col-md-3 control-label text-left"
                >
                  Label<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[check_payment_label]"
                    className="form-control "
                    id="translatable[check_payment_label]"
                    defaultValue="Check / Money Order"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[check_payment_description]"
                  className="col-md-3 control-label text-left"
                >
                  Description<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <textarea
                    name="translatable[check_payment_description]"
                    className="form-control "
                    id="translatable[check_payment_description]"
                    rows={3}
                    cols={10}
                    defaultValue={"Please send a check to our store."}
                  />
                </div>
              </div>
              <div className id="check-payment-fields">
                <div className="form-group">
                  <label
                    htmlFor="translatable[check_payment_instructions]"
                    className="col-md-3 control-label text-left"
                  >
                    Instructions<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <textarea
                      name="translatable[check_payment_instructions]"
                      className="form-control "
                      id="translatable[check_payment_instructions]"
                      rows={3}
                      cols={10}
                      defaultValue={
                        "Please send your payment to the following account.\n<br>\nBank Name: Lorem Ipsum.\n<br>\nBeneficiary Name: John Doe.\n<br>\nAccount Number/IBAN: 123456789"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <section className="content-header clearfix">
          <h3>Settings</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li className="active">Settings</li>
          </ol>
        </section>
        <section className="content">
          <form className="form-horizontal">
            <div className="accordion-content clearfix">
              <div className="col-lg-3 col-md-4">
                <div className="accordion-box">
                  <div className="panel-group">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            className={
                              this.state.activeTab == "generalsettings"
                                ? ""
                                : "collapsed"
                            }
                            data-toggle="collapse"
                            onClick={() => {
                              if (this.state.activeTab == "generalsettings") {
                                this.setState({ activeTab: "none" });
                              } else {
                                this.setState({ activeTab: "generalsettings" });
                              }
                            }}
                          >
                            General Settings
                          </a>
                        </h4>
                      </div>
                      <div
                        className={
                          this.state.activeTab == "generalsettings"
                            ? "panel-collapse collapse in"
                            : "panel-collapse collapse"
                        }
                      >
                        <div className="panel-body">
                          <ul className="accordion-tab nav nav-tabs">
                            <li
                              className={
                                this.state.activePanel == "general"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "general" });
                              }}
                            >
                              <a data-toggle="tab">General</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "maintenance"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "maintenance" });
                              }}
                            >
                              <a data-toggle="tab">Maintenance</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "store"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "store" });
                              }}
                            >
                              <a data-toggle="tab">Store</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "currency"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "currency" });
                              }}
                            >
                              <a data-toggle="tab">Currency</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "sms" ? "active" : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "sms" });
                              }}
                            >
                              <a data-toggle="tab">SMS</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "mail" ? "active" : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "mail" });
                              }}
                            >
                              <a data-toggle="tab">Mail</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "newsletter"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "newsletter" });
                              }}
                            >
                              <a data-toggle="tab">NewsLetter</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "customcssjs"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "customcssjs" });
                              }}
                            >
                              <a data-toggle="tab">Custom CSS/JS</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            className={
                              this.state.activeTab == "sociallogins"
                                ? ""
                                : "collapsed"
                            }
                            data-toggle="collapse"
                            onClick={() => {
                              if (this.state.activeTab == "sociallogins") {
                                this.setState({ activeTab: "none" });
                              } else {
                                this.setState({ activeTab: "sociallogins" });
                              }
                            }}
                          >
                            Social Logins
                          </a>
                        </h4>
                      </div>
                      <div
                        className={
                          this.state.activeTab == "sociallogins"
                            ? "panel-collapse collapse in"
                            : "panel-collapse collapse"
                        }
                      >
                        <div className="panel-body">
                          <ul className="accordion-tab nav nav-tabs">
                            <li
                              className={
                                this.state.activePanel == "facebook"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "facebook" });
                              }}
                            >
                              <a data-toggle="tab">Facebook</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "google"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "google" });
                              }}
                            >
                              <a data-toggle="tab">Google</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            className={
                              this.state.activeTab == "shippingmethods"
                                ? ""
                                : "collapsed"
                            }
                            data-toggle="collapse"
                            onClick={() => {
                              if (this.state.activeTab == "shippingmethods") {
                                this.setState({ activeTab: "none" });
                              } else {
                                this.setState({ activeTab: "shippingmethods" });
                              }
                            }}
                          >
                            Shipping Methods
                          </a>
                        </h4>
                      </div>
                      <div
                        className={
                          this.state.activeTab == "shippingmethods"
                            ? "panel-collapse collapse in"
                            : "panel-collapse collapse"
                        }
                      >
                        <div className="panel-body">
                          <ul className="accordion-tab nav nav-tabs">
                            <li
                              className={
                                this.state.activePanel == "freeshipping"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "freeshipping" });
                              }}
                            >
                              <a data-toggle="tab">Free Shipping</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "localpickup"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "localpickup" });
                              }}
                            >
                              <a data-toggle="tab">Local Pickup</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "flatrate"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "flatrate" });
                              }}
                            >
                              <a data-toggle="tab">Flat Rate</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            className={
                              this.state.activeTab == "paymentmethods"
                                ? ""
                                : "collapsed"
                            }
                            data-toggle="collapse"
                            onClick={() => {
                              if (this.state.activeTab == "paymentmethods") {
                                this.setState({ activeTab: "none" });
                              } else {
                                this.setState({ activeTab: "paymentmethods" });
                              }
                            }}
                          >
                            Payment Methods
                          </a>
                        </h4>
                      </div>
                      <div
                        className={
                          this.state.activeTab == "paymentmethods"
                            ? "panel-collapse collapse in"
                            : "panel-collapse collapse"
                        }
                      >
                        <div className="panel-body">
                          <ul className="accordion-tab nav nav-tabs">
                            <li
                              className={
                                this.state.activePanel == "paypal"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "paypal" });
                              }}
                            >
                              <a data-toggle="tab">PayPal</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "stripe"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "stripe" });
                              }}
                            >
                              <a data-toggle="tab">Stripe</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "paytm"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "paytm" });
                              }}
                            >
                              <a data-toggle="tab">Paytm</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "razorpay"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "razorpay" });
                              }}
                            >
                              <a data-toggle="tab">Razorpay</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "instamojo"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "instamojo" });
                              }}
                            >
                              <a data-toggle="tab">Instamojo</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "cash" ? "active" : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "cash" });
                              }}
                            >
                              <a data-toggle="tab">Cash On Delivery</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "banktransfer"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "banktransfer" });
                              }}
                            >
                              <a data-toggle="tab">Bank Transfer</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "check"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "check" });
                              }}
                            >
                              <a data-toggle="tab">Check / Money Order</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="accordion-box-content">
                  <div className="tab-content clearfix">
                    {this.tabContentToggle()}
                    <div className="form-group">
                      <div className="col-md-offset-2 col-md-10">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            this.handleSubmit();
                          }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Settings;
