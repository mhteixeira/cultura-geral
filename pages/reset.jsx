import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Responses({ question_type, server }) {
  const [wasGroupSaved, setWasGroupSaved] = useState(false);

  // Load the selected group from localStorage when the component mounts
  useEffect(() => {
    // const savedGroup = localStorage.getItem('ccg2023-selected-group-day2');
    // if (savedGroup) {
    //   setWasGroupSaved(true)
    // }
    localStorage.removeItem('ccg2023-selected-group')
    localStorage.removeItem('ccg2023-selected-group-day2')
    localStorage.removeItem('ccg2023-selected-group-final')
    localStorage.setItem('ccg2023-eliminated', 'n')
    localStorage.setItem('ccg2023-eliminated-alert', 'n')
    localStorage.setItem('ccg2023-eliminated-day2', 'n')
    localStorage.setItem('ccg2023-eliminated-alert-day2', 'n')
    localStorage.setItem('ccg2023-eliminated-final', 'n')
    localStorage.setItem('ccg2023-eliminated-alert-final', 'n')
  }, []);

  return (
    <div>
      <Head>
        <title>Reset - Competição Geral</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="/logo_mc_preto.svg" />
      </Head>

      <main>
        <Link href="/"><span>🥇</span></Link>
        <img src='/logo_mc.svg'></img>
        <h1>CULTURA GERAL</h1>
        <h3>COMPETIÇÃO</h3>
        { wasGroupSaved
        ? (<div className="group-label">
        Seleção excluída
      </div>)
         : (<div className="group-label">
          Nenhum grupo selecionado
        </div>)}
      </main>
    </div>
  );
}