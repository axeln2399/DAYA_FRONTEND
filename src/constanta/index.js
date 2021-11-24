// const URL

const port = ":3000";
const url = "http://localhost" + port;

export const URL_LOGIN = url + "/login";

export const URL_CO_FINDBYID = function (idco) {
    return `http://localhost:3000/communityOfficer/${idco}`;
};

export const URL_CRM_FINDBYIDCO = function (idco) {
    return `http://localhost:3000/customerRoutineMeetup/${idco}`;
};

export const URL_LIST_NASABAH = function (idCrm) {
    return `http://localhost:3000/nasabah/list/${idCrm}`;
};

export const URL_DETAILNASABAH = function (idNasabah) {
    return `http://localhost:3000/nasabah/${idNasabah}`;
};

export const URL_FORMLOANNASABAH = url + "/nasabah/detail/loan";
export const URL_PAYMENTNASABAH = url + "/nasabah/detail/payment";

export const URL_GET_DETAILNASABAH = function (idNasabah) {
    return `http://localhost:3000/nasabah/detail/${idNasabah}`;
};

export const URL_GET_SUMMARY = (idCrm) => {
    return url + `/customerRoutineMeetup/detail/endsummary/${idCrm}`;
};

export const URL_CREATE_MEETUP = (idCrm) => {
    return url + `/customerRoutineMeetup/detail/create/${idCrm}`;
};

export const URL_END_MEETUP = (idCrm) => {
    return url + `/customerRoutineMeetup/detail/endsummary/${idCrm}`;
};

export const URL_GET_DETAIL_CRM = (idCrm) => {
    return url + `/customerRoutineMeetup/detail/history/${idCrm}`;
};
