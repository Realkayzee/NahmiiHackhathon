// import { useParams } from 'react-router-dom';

// export default function Purpose() {
//   const [copy, setCopy] = useState(false);
//   const [stable, setStable] = useState(true);
//   const [route, setRoute] = useState("ETH");
//   const ETH =
//     "Saving in ETH can be volatile, the price will often change depending on the market, are you aware of the risk involved with saving in volatile token, we advice you save in USDT";
//   const stablecoin =
//     "You can now save in Stable coins. Please note that you can only withdraw it after the lock period you set, withdrawing before then attracts a penalty";
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const [isChecked, setIsChecked] = useState(false);

//   const handleChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const { id } = useParams();

//   const { address } = useAccount();

//   const { data: getUserBanks } = usePiggyFactoryUserBanks(
//     "getUserBanks",
//     address
//   );

//   let init_tx_data = [];
//   let purposeContractAddress = "";

//   for (let i = 0; i < getUserBanks.length; i++) {
//     if (id == i) {
//       purposeContractAddress = getUserBanks[i];

//       init_tx_data.push(
//         {
//           addressOrName: getUserBanks[i],
//           contractInterface: PIGGY_BANK_ABI.abi,
//           functionName: "getContractBalance",
//         },
//         {
//           addressOrName: getUserBanks[i],
//           contractInterface: PIGGY_BANK_ABI.abi,
//           functionName: "getTokenBalance",
//           args: [USDT_ADDRESS],
//         },
//         {
//           addressOrName: getUserBanks[i],
//           contractInterface: PIGGY_BANK_ABI.abi,
//           functionName: "getTokenBalance",
//           args: [USDC_ADDRESS],
//         }
//       );
//     }
//   }

const Data = [
    {
      bondname: "NV-DOLA SLP",
      marketprice: "$60",
      bondprice: "$59",
    },
    {
      bondname: "XRUNE-ETH SLP",
      marketprice: "$600",
      bondprice: "$58",
    },
    {
      bondname: "USDT",
      marketprice: "$6",
      bondprice: "$9",
    },
    {
      bondname: "USDC",
      marketprice: "$6",
      bondprice: "99",
    },
    {
      bondname: "WETH",
      marketprice: "$99",
      bondprice: "79",
    },
    {
      bondname: "polygon",
      marketprice: "$90",
      bondprice: "70",
    },
    {
      bondname: "georli",
      marketprice: "$66",
      bondprice: "79",
    },
    {
      bondname: "etherum classic",
      marketprice: "$60",
      bondprice: "77",
    },
    {
      bondname: "bitcoin classic",
      marketprice: "$60",
      bondprice: "70",
    },
  ];

  export default Data;