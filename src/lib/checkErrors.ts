// checking on errors: if a fetch is ok, returns json, if not shows an error
const checkErrors = (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(
      `Something is wrong: 4 8 15 16 23 42 && ${res.status} ${res.statusText}`
    );
  }
}

export default checkErrors;