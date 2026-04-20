import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
      <div className="container text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Page non trouvée
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}
