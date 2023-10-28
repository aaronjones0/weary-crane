import { RouteContext } from "$fresh/server.ts";

interface GitHubResponse {
  login: string;
  name: string;
  avatar_url: string;
}

export default async function GithubProfile(
  request: Request,
  context: RouteContext,
) {
  /**
   * Avatar size
   */
  const s = 64;

  const parameters = context.params;
  const response = await fetch(
    `https://api.github.com/users/${parameters.username}`,
  );

  if (!response.ok) {
    return <h1>An error has occurred.</h1>;
  }

  const { login, name, avatar_url } = (await response.json()) as GitHubResponse;

  return (
    <div className='flex flex-col items-center justify-center py-48'>
      <img src={avatar_url} width={s} height={s} className='rounded-full border border-zinc-900 shadow-lg' />
      <h1 className='text-3xl'>{name}</h1>
      <p className='font-mono'>{login}</p>
    </div>
  );
}
