import Link from 'next/link';
import IconLink from '../../public/icon-square-top-right-arrow.svg';
import Image from 'next/image';

interface VersionInfos {
  dependency: string;
  version: string;
  versionCheck: string;
  installLink: string;
}

export function VersionTable() {
  const dependencies: VersionInfos[] = [
    {
      dependency: 'git',
      version: '^2',
      versionCheck: 'git --version',
      installLink: 'https://git-scm.com/downloads',
    },
    {
      dependency: 'go',
      version: '^1.21',
      versionCheck: 'go version',
      installLink: 'https://go.dev/dl/',
    },
    {
      dependency: 'node',
      version: '^20',
      versionCheck: 'node --version',
      installLink: 'https://nodejs.org/en/download/package-manager',
    },
    {
      dependency: 'pnpm',
      version: '^8',
      versionCheck: 'pnpm --version',
      installLink: 'https://pnpm.io/installation',
    },
    {
      dependency: 'foundry',
      version: '^0.2.0',
      versionCheck: 'forge --version',
      installLink: 'https://book.getfoundry.sh/getting-started/installation',
    },
    {
      dependency: 'make',
      version: '^3',
      versionCheck: 'make --version',
      installLink: 'https://linux.die.net/man/1/make',
    },
    {
      dependency: 'jq',
      version: '^1.6',
      versionCheck: 'jq --version',
      installLink: 'https://github.com/jqlang/jq',
    },
    {
      dependency: 'docker compose',
      version: '^2.26.1',
      versionCheck: 'docker compose version',
      installLink: 'https://docs.docker.com/compose/install/',
    },
  ];

  return (
    <table className="rounded-[4px] text-white ring-1 ring-[#303F5A] *:px-3">
      <thead className="font-bold">
        <tr className="border-b border-[#303F5A] *:border-[#303F5A] *:px-3 *:py-[10px] md:text-left">
          <th className="border-r">Dependency</th>
          <th className="border-r">Version</th>
          <th>Version Check Command</th>
        </tr>
      </thead>
      <tbody>
        {dependencies.map((dependency, index) => (
          <tr
            key={index}
            className="border-b border-[#303F5A] *:border-[#303F5A] *:px-3 *:py-[10px] last:border-b-0"
          >
            <td className="border-r">
              <Link href={dependency.installLink} rel="noopener noreferrer" target="_blank">
                <div className="flex items-center gap-1">
                  <span className="font-medium leading-4 text-tokamak-blue">
                    {dependency.dependency}
                  </span>
                  <Image src={IconLink} alt="linkIcon" />
                </div>
              </Link>
            </td>
            <td className="border-r">
              <span className="rounded-[3px] border border-white border-opacity-10 bg-[#232634] px-[6px] py-[2px] text-sm font-normal">
                {dependency.version}
              </span>
            </td>
            <td className="w-full">
              <span className="rounded-[3px] border border-white border-opacity-10 bg-[#232634] px-[6px] py-[2px] text-sm font-normal">
                {dependency.versionCheck}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
