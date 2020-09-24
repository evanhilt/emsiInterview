const apiKey = "39dS0XPrx41u3Okhz5PFgjcMMWWI68lE0eSoUTTT";
const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential,latest.programs.cip_4_digit.title&api_key=${apiKey}`;

const getSchoolsUrl = () => url;

export default getSchoolsUrl;