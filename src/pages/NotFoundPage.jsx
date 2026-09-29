import { useLocation, useNavigate } from 'react-router-dom';
import StatusBlock from '../components/StatusBlock.jsx';

export default function NotFoundPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section className="page-shell">
      <StatusBlock
        title="Страница не найдена"
        text={`Путь "${location.pathname}" не совпал ни с одним маршрутом.`}
        buttonText="На главную"
        onClick={() => navigate('/')}
      />
    </section>
  );
}