import Column from '@components/Column';
import PostCard from '@components/PostCard';
import Row from '@components/Row';
import { Dashboard } from '@mui/icons-material';

export default function Home() {
  return (
    <Column className="px-6 py-6" align="start" gap={10}>
      <Row className="mb-6">
        <Dashboard className="text-primary" />
        <p className="text-text">Dashboard</p>
      </Row>
      <Column>
        <PostCard
          origin="Artificial Intelligence"
          author="Professor Smith"
          date={new Date(Date.now())}
        >
          <p>This is a classroom post.</p>
        </PostCard>
      </Column>
    </Column>
  );
}
