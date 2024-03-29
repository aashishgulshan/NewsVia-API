import React from "react";
import { Link } from "react-router-dom";

function Catgory() {
  return (
    <>
      <div className="bg-gradient-to-r from-fuchsia-200 to-cyan-200">
        <div className=" max-w-4xl lg:mx-auto py-8 text-center grid lg:grid-cols-6 grid-cols-3 ">
          <Link
            to="/business"
            className=" mx-auto px-4 pt-4 rounded-lg hover:bg-[#4318a027]"
          >
            <img
              className="p-2 rounded mb-1 bg-[#201a7998]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEfElEQVR4nO2aX2wUVRjFDya8YUhU4K0g8scQGmhmCiQCJVpwSSohAX0w+oJvRkKggaI8mAgGumh2SwgIOwShRHapJSCE0Ki0O2tbErrBuJVCiY1ljUBrobtr/6Wwl9zhzjLF3e60c2en485Jzks7t993fve7N+10AUeOHDly5Mg0HV9aP0sSgkckQY76BPmRJMpkNCvPCHJUEuVv6FrYWZIQXOMTgvFsoTPDCMZ9QsNq2FFHlwRfNRJeAyEmFTXOhN0k0bE3GD4FQZQPw26Snp5jLgAkMdgJu8mX5sLzLWt6Kdu6E8U/vpzuYoTdJKXZyVysnTCS/o8ASupuLV7X2BHeFOka3HI7Rso7Ely85Y8EWfrrg3G7ONxNCkOd/XPqboQKzrUuMCV8af3NI5vbe5O8Qmv9UXvcEACtxZau5KyLka+4hy/XNPz1X32kpnuQXOwZSvlCzxDZG+0bFwBX60NuAFRzg1BSd2uxuvO7/vyXhBPDJJP+GX485vDvtcW4h1cnYeb3v71uGMC6xo6w2uxo4ccCgJ55OvZm7LzWcy7fkA0D2NTaNaiOvaokIeTn3iFSfX+AnGQ+erefbGjrNTXQWE0vRsMANrfHlPGnZ14VDW91OL3HwDCAcja2dQ+HUgCkewOWh9NrUwD4HAAD+TcBlx48m4DDf/fnH4C90T7SM/xY8US77XMCoFxjq0Nls9gUJUWXI2TRhZb8AyA03CaLzl9LOa8AiE3REeHzDkARHXveALam+bvf6qCZTM+8NvzCs83GAXwcuW8fAM/t/tzqK8YBfCjftC2AVzx+4wDeOfsL+eT3rrQA3j3ZSapKm/7z/q5qdTPZWH2HWzC9dbTh531XTyZVHDAOoKw2RNb/cHUEBLUgbSDTu3zvmmZuAPTW0YafvOsQwXYvHwBltSFCJ+EDuY3QO0Fs6VYKZvuHBi8AeurQnuaeuqKMvbLzNDxPAGUawx1QnK0x9Tmj1l1HDa01bwCummCq4P4VDRmbcq+s5wZAd51cAFh26qdUwcKt59M2R5tauO0cNwC66+QCwPSD/IJxt9kA5kuXrA+ZawCumqAy9hN6580EAKtDOQACzgTAOQKB7BAq/Xl+B+z+1iwA/rjl4bJ532mCnZrf/1P2JIwDqPRfn9BjT3c+bXjFrRwmILDb1BB7ThB8doigoipTiPF7Z5XbOID9tdNNOwafS/xDq97hjeNT7wxw0b4zG1HpT3LfebPCb/ckUeF9n0/4ERACMW4A6NibtfPcw6v68sw0VPq/gDsQhtufMASA65n39GGHJ6KceW5jr0OjvqWxYR1uH4j2CfIdO9YZs46JobXPN0eb8hXLLjvWcWRAkwFMBUAvoAIA8wAUAigGsBzACgCrALxJP3gK4G36roW+cGJ2sa+VsmdWsTXL2c8oZD+zgNWYympaphcBvAZgCWu6zCKXsh5oL1NyEfwFAKKFgbNZZD3mNYBJyIGmAJjNzqeVR+At1sPsXB0BZNBol+Ab7EIrYRccbTrTJUi/R5+hz9I1dK2pl+ATLsNTorpRTCsAAAAASUVORK5CYII="
            ></img>
            Business
          </Link>
          <Link
            to="/technology"
            className="mx-auto px-4 pt-4 rounded-lg hover:bg-[#4318a027]"
          >
            <img
              className="p-2 rounded mb-1 bg-[#201a7998]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD4UlEQVR4nO1aTUwTQRR+wauJytGTRBPjhUvLiQjVRMAAJy+SECXRQA96JByJGA4kGgylNYZ6wETh4EXABDwIbSGRmJCCBwKJaOhWQtj+IKCH7u4zs8zCdlva3Xa3PzJf8l26Ozvv++bN7LydAjAwMDAwMDAwMDCYDq/N1zxi83Femz/02h64baytf8Fr9+NJHLH7AlDq8Nr8oaOAbf5NQ20ziFcIhcKzbaFjiBeXhnnxrzsioR66eCklYGdY1E09BqRtywn7zrAw28klWk0RP7gjjugVrebAjlgcA1Ts4sT+vEfeTQVN70m4IyCKmIy4gPgmlmpA91bxDTjMiERLzgYM8eISEfNpT8JM8O0ni+/dTi+iGAZ0hcXPORswzIt/iKCocLL4mIA4Gjuc8yTtycgrnXsaF4+C9TQtGjJg8F4wo/gX95d1ZoDwO2cD3BEJX0YkVMafpP/jX/pF9ExEZBOI+J7JiCEDzGReBryKHqd/QsKiiWAGhFkGYMlNgeEfsxgLOjAadKBrw5fScbbraj7iEjgzt4zxsSnE0fe6GR+fwhnfity+4AZEgw7EpWsyo8s3UjrOdl1NIsKIcC1Je0sMcEck3Ke7H15INkARp1DbcbbrahodeS13x6esM+BtXML5A0ne8VllgFrM5pMJfFc/m3EfMOaYw1DfZFI7ywxwq1gIA4g4PTtBct9/aYBXh3iFzIDRAmaAiz/lGTCwI55uA7q3TrEBvbTGLxcDHqzvYvvXn9i2sJa7Aa40NX45GNDxbRvbAqtHzNkAZ4aAS3UfQEZeLb4sDQj1TWY1Qd4JPp1IMUBO+3I0ID6eXy0QG/8oP4fM+YIZEC2hanCaVoNa8ZYa4NrwySKJONeG3/D1lO8BvhXDmaD9HlBQA5wlSGZAgGUAFmUK9Hzg0dPw5fggpHFRPhc4NVPAozoFynYapHws1b4mc6H2g2vRDPAaOL9Tvx5NMUH1imUGBMpgCrjo/sCs0Vf2GA+/75ubAV2csGf0IFQtPtuBqLpkTRe4GbwbWN3LIwOEWatWa23Jahnn1+ZzNqCTS7RaIT5dyWoV2+fX70A+6OLEfrMNSFeyWpL+C2vPwQw4uUQL+auJkTUhEy2d8/7VA5L2eY88AwMDAwMDQzacAYCzAFAJABcBoAoArgJANQDUAEAtAFwHgDoAuEnZAACNANAEAC2UTfS3W6r76mjbWvqsavrsKtpXJe27AgqICwBwhQZEgmxWiSgWm2ksNTQ2EqPpOAcA9SUgVi/raczMALNxHgAul+gUsNPYSIwFQ4VmEbx0wiJIqCxuZKHTswgq7bSLIOnDtEXwH52XZYiwtHP1AAAAAElFTkSuQmCC"
            ></img>
            Tech
          </Link>
          <Link
            to="/sports"
            className="mx-auto px-4 pt-4 rounded-lg hover:bg-[#4318a027]"
          >
            <img
              className="p-2 rounded mb-1 bg-[#201a7998]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIvElEQVR4nO1aa0wc1xW+qdpaaaMqbaRKUdWqbWRicIDAwL5meM0usDbLDHFi51HXimMDSW0MLGxMea5BTpvIju086oCTyHm5qVSpan61UqoorV/FaWon2CzgmId5+YVxi8HguXuqO+wue3dm8K6zD6zuJ50fsLOz9/vuud85Z3YRiiOOOOKII4444ogjtoAtdfeBvVHA1c078bamP2O787iUveZLiRPHJU6c8MS4xAlfYlb8G+aEdokVngGu6PvoTgXYG9OwvWUXrnF2SY5Wt/v5NvAPnLMGMCcuGhIrzmBOfA0Ma3+A7gRA9e67pcomO7Y7ewMJU7Gt8ZbkaSGEUcgq0aGlCqhsuRdXNu3CjrbLixL37v5jpSEJ4MmGKTDaMtFSAgDcJdW0PCs5Wi8FQ1wm/4wdcFZJyALIInDiCOSI96KlACjfnoprWzuDJr6lHvCjm2+bvF+8GmvuSLK3VWBH28wtSf+qDvDj5YAtj39d0n5ZIEzHzBShYt8yqG1930fyjXfB/buDNHFHG+DSWsDWp8JGWsUUN0Sf/HMNP8Y1zpMyyfrfAJw4CV643zo0v+Ob7GHdbe0Q2qNLvqz2AVzdMiSTf2EfwPkRH3lZgEN/Aiw8HQXinmCFj6NHfnNdArY7x2Tye9oB/jtFk//0GGD+McUiZ03FcDYlF04mstCbkgMzJlsYfUB0RYf8szU/lOzOAZn8y+0AU9cXmEsSuDve11zkFys5OLxc54t/rTCShYdLgGuRJ19W9i1c2fzZPPk36J2fngHsaNVc4LTJJpM+usIEE80vAX77Q+jfsBUm9at915xPM8OpJBb6U/mQhZFYQYq4ALiyeb/X2WH0Ak2+omHRBZL0JwJ0F68HeOePvpjdMv++syl5VHb0p+aFnAWQk/PNiJGHsjqr/wADw6ML5CuD6+PJuT+RkQ/SgUOUCFfKHBR5EsQnQhaAsX0nMuStFctwzY5+qrbv3Avuj/4KuMyhkZIiXNEVwsWMAphjBd//x5l8OG99AtwHfk+JMLipihJgKI0P8QiINwGhuyIiAK6ob1Pt6tZvVV3MTVaQd9BLpvNBA0wZi+jrSAusIQLJlCCNDyaNRTCqt8KwruBqRMjDLyq+J9XsuKogv7UecLZ6D0/MjBA5lsTC4MYq6Fu7GbqTc6lrSDk8xT8CUgd9HC6Xq2eUwlNYAc5l5kM3Y5bDxfCDkRFgm8buFz6puTivoV2ocS4Qq2ryDT2EvDc71ESY3doAk/pV8jHS2nl/8vPB/yP85FHLNyR7y7CCPOnrF9kdcu4Juastuyhi7roX4Gwq7fYkvshbAzjAGEmJ/DzRqNosTRhWB5CXoyP8AjzXUKC6+0EMNQMP83DSuArmXn+HIja2rQEOJ+gpAeQz/2gpuN9cEMH99h/k63qSsxX3HtIVKgToyTRXhF0AXLPjgIJ8+fPUYm6YiqEnOUc2OtLETOpWUZVAsq0H2P8uJcJ4dbNPBH/DG7Y+5SuRV3fsll//9woTbbCcAC7GohDgnD5fH3YBpNrWfuWjq83Ugk5729sEPXSm5cHx5Xq4YSymrhnMLYHZ1w8qROhNpY1xjCmAzzLzwSX+Eo4mmeT79qXQ1xDXDyR/hjGPh70EQmVjomr682up3TiyXAdHHjTIO0aIXdreBhd0Vsrt5b7fYFWI4K7/LeAsZbPkM8gkVs4wqsKopH83wx8MK3kCqGwoVX2aE3AeyY6fyi2hiM217JJLpL/ba4lwxe4EV3Iu1ScQ0tOBfQMnwgxbrGZ+pASWoHADVzW/qhBgXZliUaOMRa730y93UMSmml6UMyPQ8QfyHgHY/x517dl1pbKHzJoWOka1GNFZlQKkm4ciMgPgGufHiuf2Gl9cEOMbYW1wc88BithE04vy9Ee5PTFH2waqOgxuqpZfJ+VTizzZfTXzO51udoSdPAG2O/so8pZ1t+7Q8p+A2YBMmGh6SRYhsL0lJZL0CRcdrXDsoXkjvZxp1Wx8+jMLlOaXbp7oSsq5B0UCUlntKN5YNd+za7S8yg4wV64E07vb6eMgewKdPYMP89TRIOVO6xnARcMq1bPfx/CtESFPQL6cDIa0N8j87ht+VESYa90DF/WrKFe/kFEAfcm58uzgPzH6x3+MNtXUdzHmgSGD4W4UKUicMBcsedLwHEmgza4znYe5fW9SIlzavlOuGv7N0mIxZVIn383wuC/dUhgx8gRkvg4lA06sMCrb28InQXrlLUoEIsypIB52XCcdZoYaeTP0ZebvRZGGxAqToQhAnu0REUgmnPPr3kY4Aab3zBvjtba9csf4zwTDovciaa9F3sWYP43ooy8vJE4cDkUA/+6QEka3Go6tZOWJ74gnS1wPKQccb1xWn/TmBx7G7DqTab4PRQMS+WXGbQigFqRZOp4w3xR1rcxStLckiAkOq7a53rB8NWTgf4SiBcwJH4VLAF92aDg9GXB6NVLeE91fMZafRI08AWaFV8ItQGBMm4pVZ3v/6E23HB6Mxe+CJE4ojRTx60EQ9xheR1fS2m+jWAC4NT+XONEdLtI32GLZ4AZUWlqVAedab4ZlI4o1MCv85euQJq3tFcNqlQeY2tGTbvmkX1/4U7QUANlicigdYSD5wWB221fiLGPnMgrKIvblxu1CYsXy2xFgXK8yu6un+1AvY6kbS8n/LlqqkFihknz7Gsruq/fw/gZn+bwrnX/6k2h0deEAGG2ZEiseDtbl1QaYbobv7GbMjaf1luXoTgVwxSlSluDAnPCBxAl/lzixz++3vRPkF5zXTUVdLoY/2sPwH55JN/+aTG4xqeVxxBFHHBHEMoQQMbb7EUI/QwglIoTSEEImhFAWQigbIcQjhMwIoUJP2Dzh/dvsuSbb8x6T5x6Jnnve7/kM8lkxxz0IoQcQQuRLyAI/MtGKAs9nkzVEvWlKRQgVxYC0VpC1pERTgJT/dwGQJ+1ieQTyY3kEkAq0TNAYYIIktEzQ+7rXBMl7I2qC/wNeV1a0ZBhqaAAAAABJRU5ErkJggg=="
            ></img>
            Sports
          </Link>
          <Link
            to="/health"
            className="mx-auto px-4 pt-4 rounded-lg hover:bg-[#4318a027]"
          >
            <img
              className="p-2 rounded mb-1 bg-[#201a7998]"
              src="data:image/png;base64,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"
            ></img>
            Health
          </Link>
          <Link
            to="/science"
            className="mx-auto px-4 pt-4 rounded-lg hover:bg-[#4318a027]"
          >
            <img
              className="p-2 rounded mb-1 bg-[#201a7998]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFf0lEQVR4nO1ba2xTZRh+cfsjCX9MuJhoCO1YT7duAboYI14SsomJW6KRkTiQYcIuBEMU8IdT4w+ZU/aLHxIDM0HD2FyUdQM0YuKyCVOx5xTH6NbTMwYBIwsOZBdwbOwxX++X07Ub69fTrk/yJMv2ntM9z/e+7/d+py1RGmmkkUYa8QfsW56Gs/x9KG+2Qq5wYqD6XyiVU1Cqp+DcMYq+zU6IQgsk4z6I2fmUCkBv6WNwbq+BUtGPgZ2YkfYSQDIGULBDMuzFWcMSSjYAtAhK+buuVY4mnFGpBi4UhBjg4z8QhT3oeCGTkgGQ31gLZ8XFmIR72VsUSXwgrRBzjaRlwF5WDKVqxCfs6gfAmA2YGgGGvg4XLm8FetbHIt7LOxANJaRFQC6vhlJ93ydu2AJMT8CHiWuAowy49CLQ8wxgy5uN8EBOQRJeJy0B8tYSKFWTLuGXdwNjIoLxALheP1fB6iZYhWLSAmDfavI1Oyb+nhKs/e4loH/TfIr3l4M1W0iseJRmwLnD7kv7UWuw+KGjgJQbD/FuisL5hO4OcJTvDar5QFyvi5/wQFqFtxM45FTecnf7muCGN/QVH/Fu3kzIsAS5/EPf6o9JfvHjvYDNxNMAVgrv8DdAqexzG7ALwLS/2/dv5ivezT42ffIT79j2VNBAM9LtNmHoy0SId9NmzOVngLz9o7Cpjg05CRA+ds6Aaz9kYfC0/j2eBrSGGcAmPM7ib/6cDUer3kVnm/5EAup/p59svOW88l7xjHKrvo+fAU6VY64tn6sBLO2DDLDohzkaUHUv+FS3nXv6O9v84t3UTfAzQPEcfGZ3np83TovGEPF69Lfq/uNngNMzATK6Djo56v9s15PAN5lunlkKWA3RBbIYFuu9jt0jJGbyDyHMAIdFP8TRgAoH5G1Ab2Fk8YwtmUAj+dmcEdkIr3AWE3gNu0dI7Hh3cAPk3wSlnOaY0jXUADUjIgmfwYDhDv/2F7ANfsvPAFF4KyYDWPpGEsZ4fBHQ9Ejkv7NrVUrg6vdZagbU8DPggmCKuWlFW+FoGRJyv4nfVeq/VQ/lpM7EzQAGSMY/Z9W9YzFiph7h4d8/rVZrgA7iDUjG3XPaxrxGhIqPYZe4+6v66jvb9fv4G3DWsASicGPO+3moAVHiH1iNuHwyvPYdFv3tPkuC3j2CVdjFwwA2+ISOvgGrvych4hnYA0lIwm/xNGDKGlm8bNHZ0EIZlEjg/Gqd6xF1HAxgHX/wlLp4h0V3Z+DEqmzSAiDmvARRmJhPA0bPGlQOPL6Dz33FonuVtATYckohCZPzYYDapBew8lMD7boy0iIgGQshCrcexoDbnZHFyxb96JXTWa+RloELQjYkY89cDGD7vGyJJF5nly1ZOZQMQPcTj0I0Hp2tAVdOR9jq2vSNf7U/vpiS7lMionAwVgNCn/EFiP+CkhVgJkjCL7EYcENlxpctWd1c3/CIB2AzvhKLAWrpf7ltVSklO9BjWh6LAUp7ePoPnlq5gpIdaKGMhoIuRGOtqTGMCR9z5wtzNYBSBQ1pA7oWdgYcMXeOzCT+sLkjTPx+07FRShU0mDttM4mvz/9OLQN6KVVwpKDr40DRh9adcYmuy2tSTX3GT0zNByhVcCj/3DJvGRxccyqiaH/6N47Umo4vp1TCYXPXps/X/TgdXfyx6U/zmrR53n9YfGZq2cKa20wrn7LivTiQ07KiLq+5fr+p8WKtqXGckf3Maj7l0j6NBYzFRLSUiFYSEfuWRwERPUtEzxPRBiIqJKKNRPSyhxs9v9vgiWGxZs+1Kz330vwToWVEtJaIioioOE4s8rwGM0RTMMdRdCSuIw3BvNANIE9a8iiBNVosAQpBaBNkGbKeiJ6LoQmyGBbLpQn+D+t/dShToPnhAAAAAElFTkSuQmCC"
            ></img>
            Science
          </Link>
          <Link
            to="/entertainment"
            className="mx-auto px-4 pt-4 rounded-lg hover:bg-[#4318a027]"
          >
            <img
              className=" p-2 rounded mb-1 bg-[#201a7998]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERUlEQVR4nO2bTUgUYRjHn0i71KlDVhAIRWKIW860Y2UkFaQldNKgD43qEhIK1TE0pUunvFjbLPhBl+qgm4fyVDNtgevXmtGXGamX1FxztwS/euPZZmx2drbImXlHd+YPfxZe3Zn3/3ve99nhXQVw5MiRI0crQ3zOc8bLClfwFewmnhVOeFlh1suKBF9tBYHH8Iw49zu8bOEq2Dj8rC1WAK8VnhHncBySvWHxSRB+Vl6ud3PEItuER2GDUk6eZ8XvPCO4wQ7hUd7dfpZnxHlV4xr1MP6tkOzhZfGMcCEWQBTCx/rsFxtAQ17mebE6fBTibuEUrFTxjHAjDgIjBpqz29cmfXgUAbLKy4qN8RCEtqoDT1OSOrwsD9OVyrNiuwYEz4oJf+5NJKt8YEqoHIxMX/4UIUt1xWCEcMGQqXb3hsJccKI1t/vbNkPCl72f3Kk3uOzzH8KmA1CAiLB94xm6AVwcCHcYER5d8HqSGgDJ7boBVA5GZowIX/J2inZ44g6GpnUDuKxzz+Oyt6DyizYFACddvKTxM6k92U1u7/OrHnj0Ga9Xe6qbFDcNLV8Al669MTR0IpdXvY0Lldc1Rpqq75DRo6Vk9FgZabruiY5RA1DS+JlKeNnqlYCBF/KOxxjHqAGoPdm9OLmGvX7yqnmE/BifIbIW5n+SYMOwYQBqTvfEhMLKqwGMHS2lB+BO3p89j+G1NDc9b1xPyPPHAjhWFgfgS9FZegC8isn9GPtTebNWAPpfW6Cx5u7iz9mXI2TXk37iausyH4BSZvaBuCZ43RNdCeomyDwbIC5f56KTEgCXwFh5ZXjbAdiFy97OAFxtXfQBLMz+jIbHV1oA3D1fyaYHHST1VgtZU9dKNj/siI6pw1MBEGwYJvMzC4Z3/b8BwMBw836MccwSAF5KVgLAyqsBpNa12AfAmrrWOAA4RgVAxaD1ACzdAuc/hC0HgA0PA2PVqTfBgteTlgNI+DFoNoAS6VjLVgAqNI61bAWA07iR1QCoPghxGgCU5wE0XK86D6D6KcBpAMADS5oAas70WPcgxGkAwDM6mgCKm4esexDiEjQcPK2lEb68+l3cvbW2wMZ7Al0AnLQS8MDS6J6A18Nlr658ogchDJ/tC9AHwP2nlWd1WpM1w7oBuKNfN+sPrz6ro+NA2IAVMNFiROXph+8k2Y96fLoBsH3jGe7eiZAeAFpndaaH9wUmXY9703UDQLH9E1u4YOgBFwxNLQUAzT3v8gUiWHnDwjty5MiRI22tBoB1ALAeADYBAHbd7QCQBQD4PwJ7AGC/5HwAOCj5iORCACiSXKgYl38vX/H+PdI1s6R7pEv3XC/NAediqlIAYCMAZAJALgAcVkx+ufiQNLdMaa7RP8U1QjtU1VopLpTmblsABdJqMEQpAJCm2AKHlvkWSDNyC0AC/a0J5qia4AGNJogVUlZL3QTxPfL7MRhe0/Am+AtamKN3uFUz7wAAAABJRU5ErkJggg=="
            ></img>
            <span className="text-center">Entertain</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Catgory;
