const apiKey = "39dS0XPrx41u3Okhz5PFgjcMMWWI68lE0eSoUTTT";
const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential,latest.programs.cip_4_digit.title&api_key=${apiKey}`;

// async function getSchools () {
//   // await response of fetch call
//   let response = await fetch(apiUrl);
//   // only proceed once promise is resolved
//   let data = await response.json();
//   // only proceed once second promise is resolved
//   return data;
// }

// getSchools()
//     .then(data => console.log(data))
//     .catch(reason => console.log(reason.message))

// const getSchools = () => {
//   const response = fetch(url)
//     .then((data) => {
//       data.json().then((jsonData) => {
//         console.log(jsonData);
//       });
//     })
//     .catch(() => {
//     });
// }

const getSchools = () => {
  return url;
}

export default getSchools;