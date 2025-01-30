import Head from 'next/head'

export default function PrivacyPolicyFR() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head>
        <title>Politique de Confidentialité - Depogro</title>
      </Head>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Politique de Confidentialité</h1>
        <p className="text-gray-600 mb-4">Dernière mise à jour : 30 janvier 2025</p>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>Chez Depogro, nous accordons une grande importance à la confidentialité de nos utilisateurs et nous engageons à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations. En utilisant nos services, vous acceptez les pratiques décrites dans cette politique de confidentialité.</p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Informations que nous collectons</h2>
          <p>Nous collectons les types de données personnelles suivantes :</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Informations personnelles : nom, prénom, adresse et numéro de téléphone.</li>
            <li>Données d'utilisation : informations telles que l'adresse IP, le type de navigateur, le temps passé sur les pages, et d'autres analyses pour améliorer le service.</li>
          </ul>
          <p className="mt-2">Nous ne collectons pas d'informations sensibles telles que les détails de carte de crédit et nous ne réalisons aucune transaction en ligne via notre plateforme.</p>
        </section>

        {/* Add the rest of the sections in French following the same structure */}
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">12. Nous contacter</h2>
          <p>Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter via le formulaire de notre site web à www.depogro.com, ou en utilisant l'adresse ou le numéro de téléphone ci-dessous :</p>
          <p><strong>Adresse :</strong> Rue du Parc, Ariana 2036, Tunisie</p>
          <p><strong>Numéro de téléphone :</strong> +216 71 123 456</p>
        </section>
      </div>
    </div>
  )
}
