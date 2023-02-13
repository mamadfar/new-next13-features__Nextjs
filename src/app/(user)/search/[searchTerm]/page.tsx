import { BaseResponse, getJson, GoogleParameters } from "serpapi";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

const search = async (searchTerm: string) => {
const res: BaseResponse<GoogleParameters> = await getJson("google", {
    api_key: process.env.API_KEY,
    q: searchTerm
})
// throw new Error("WHOOPS something broke");
  return res;
};

async function SearchTerm({ params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm);

  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>
      <ol className="space-y-5 p-5">
        {searchResults.organic_results.map((result: any) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchTerm;
