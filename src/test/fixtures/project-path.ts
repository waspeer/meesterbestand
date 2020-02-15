import { ProjectPathProps } from '#projects-module/domain/project-path';

const paths = [
  '~/Wanz/projects/b001 crusade Project',
  '~/Wanz/projects/b040 descent Project',
  '~/Wanz/projects/b002 wasting away Project',
  '~/Wanz/projects/b041 dreamlike Project',
  '~/Wanz/projects/b005 ac limes Project',
  '~/Wanz/projects/b049 always : never Project',
  '~/Wanz/projects/b005 like anything Project',
  '~/Wanz/projects/b051 spacedogs Project',
  '~/Wanz/projects/b007 rain Project',
  '~/Wanz/projects/b053 happy Project',
  'projects/b008 ivy Project',
  'projects/b054 phantom Project',
  'projects/b009 ruhr Project',
  'projects/b055 calculator Project',
  'projects/b010 songbird Project',
  'projects/b060 every Project',
  'projects/b011 rambling Project',
  'projects/b063 rest(less) Project',
  'projects/b012 wish Project',
  'C://b065 faster but slower Project',
  'C://b013 trying Project',
  'C://b066 kill me Project',
  'C://b014 shadow Project',
  'C://b067 friends Project',
  'C://b015 murn Project',
  'C://b077 moondance Project',
  'C://b017 nowhere Project',
  'b019 ivvv Project',
  'b022 green Project',
  'b091 edgetalk Project',
  'b024 worms Project',
  'b094 buns Project',
  'b026 guilty Project',
  'b096 cotton Project',
  'b027 lazy Project',
  'b029 nomad Project',
  'b031 never mind Project',
  'b100 ramses chernobyl Project',
  'b034 leans Project',
  'b036 duality Project',
  'b107 kill it Project',
];

const randomPath = () => paths[Math.floor(Math.random() * paths.length)];

export default function projectPathFixture(path?: string): ProjectPathProps {
  return {
    path: path || randomPath(),
  };
}
