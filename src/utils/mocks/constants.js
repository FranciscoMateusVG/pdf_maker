let data = {
  barco: {
    nome: "IPANEMA BEACH",
  },
  logs: [
    { prop: "Porto de carregamento:", value: "Damieta, Egito" },
    { prop: "Porto da descarga:", value: "Paranagua, Brasil" },
    { prop: "Data de chegada:", value: "20/11/2021 14:06" },
    { prop: "Data de 1ª atracação:", value: "20/11/2021 14:06" },
    { prop: "Data do 1ª inicio:", value: "20/11/2021 14:06" },
    { prop: "Data de 1ª termina:", value: "20/11/2021 14:06" },
    { prop: "Data de 1ª desatracação:", value: "20/11/2021 14:06" },
    { prop: "Inicio da descarga:", value: "20/11/2021 14:06" },
    { prop: "Total da horas atracado:", value: "124:23:00" },
    { prop: "2º Término:", value: "20/11/2021 14:06" },
    { prop: "2ª Desatracação:", value: "20/11/2021 14:06" },
  ],
  resumo: [
    { prop: "Manifestado:", value: "23.710,000 tons" },
    { prop: "Descarregado:", value: "23.710,000 tons" },
    { prop: "Saldo:", value: "23.710,000 tons" },
    { prop: "Prancha:", value: "23.710,000 tons" },
  ],
  percentualDescarga: "99.66%",
  descargaPorao: [
    "6.300,000",
    "0,000",
    "6.300,000",
    "3.700,000",
    "7.410,000",
    "0,000",
    "23.710,000 tons",
  ],
  dadosPrancha: [
    `<td></td>
         <td>07:00 as 13:00</td>
         <td></td>
         <td></td>
         <td></td>
         <td>1.738,120</td>
         <td></td>
         <td></td>
         <td style='flex-direction: row-reverse;display: flex;'>
         <span class='tons'>tons</span>
         1.738,120
         </td>`,
    `<td></td>
         <td>13:00 as 19:00</td>
         <td>5,360</td>
         <td></td>
         <td></td>
         <td>346,400</td>
         <td></td>
         <td></td>
         <td style='flex-direction: row-reverse;display: flex;'>
         <span class='tons'>tons</span>
         351,760
         </td>`,
    `<td></td>
         <td>19:00 as 01:00</td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td style='flex-direction: row-reverse;display: flex;'>
         <span class='tons'>tons</span>
         0,000
         </td>`,

    `<td></td>
         <td>01:00 as 07:00</td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td style='flex-direction: row-reverse;display: flex;'>
         <span class='tons'>tons</span>
         0,000
         </td>`,
    `<td></td>
         <td>Total do dia</td>
         <td style='color:white'>5,360</td>
         <td style='color:white'>0,000</td>
         <td style='color:white'>0,000</td>
         <td style='color:white'>2.084,520</td>
         <td style='color:white'>0,000</td>
         <td style='color:white'>0,000</td>
         <td style='flex-direction: row-reverse;display: flex;color:white'>
         <span class='tons'>tons</span>
         2.089,880
         </td>`,
    `<td></td>
         <td>Total descarregado</td>
         <td style='color:white'>6.559,620</td>
         <td style='color:white'>0,000</td>
         <td style='color:white'>6.317,540</td>
         <td style='color:white'>2.814,400</td>
         <td style='color:white'>7.937,160</td>
         <td style='color:white'>0,000</td>
         <td style='flex-direction: row-reverse;display: flex;color:white'>
         <span class='tons'>tons</span>
         23.628,720
         </td>`,
    `<td></td>
         <td>Saldo atual</td>
         <td style='color:blue'>+259,620</td>
         <td style='color:white'>(0,000)</td>
         <td style='color:blue'>+17,540 </td>
         <td style='color:white'>(885,600)</td>
         <td style='color:blue'>+527,160 </td>
         <td style='color:white'>(0,000)</td>
         <td style='flex-direction: row-reverse;display: flex;color:white'>
         <span class='tons'>tons</span>
         (81,280)
         </td>`,
  ],
};

module.exports = data;
