export interface IAticleProps {
  id: number;
  canonical_url: string;
  created_at: string;
  description: string;
  title: string;
  tag_list: string[];
  url: string;
  user: {
    github_username: string;
    name: string;
    profile_image_90: string;
    username: string;
  };
}
