import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <h1>Simple blog using nextjs</h1>
      <div>
        <p>
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching, and more. No config
          needed.
        </p>
      </div>
    </Container>
  );
}
