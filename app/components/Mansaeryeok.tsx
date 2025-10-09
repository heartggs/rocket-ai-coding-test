import GapyeongWaveText from "./GapyeongWaveText";
import CellContent from "./MansaeComs/CellContent";
import ElementCell from "./MansaeComs/MansaeElementCell";
import RowHeadCell from "./MansaeComs/RowHeadCell";
import MansaeLeft from "./MansaeLeft";
import MansaeRight from "./MansaeRight";

export default function Mansaeryeok() {
  return (
    <div className="relative">
      <div className="absolute top-[-23px] left-1/2 -translate-x-1/2 w-[310px] h-[589px] border-[3px] border-deepblue box-border mx-auto z-[60] bg-paper saju-palja sm:w-[351px]">
        <div
          className="border border-pri-navy mx-[8px] h-full border-t-0 border-b-0
          before:content-[''] before:absolute before:inset-[8px] before:left-0
          before:border-t before:border-pri-navy
          before:pointer-events-none
          before:w-full
          after:content-[''] after:absolute after:inset-[8px] after:left-0
          after:border-b after:border-pri-navy after:pointer-events-none
          after:w-full"
        >
          <div className="relative">
            <div className="absolute top-[45px] left-0">
              <MansaeLeft />
            </div>
            <div className="absolute top-[26px] right-0">
              <MansaeRight />
            </div>
          </div>
          <div className="pt-[40px]">
            <GapyeongWaveText
              className="font-hanseokbong"
              weight={400}
              size={16}
              leading="100%"
            >
              김로켓님의 사주
            </GapyeongWaveText>
            <GapyeongWaveText
              className="font-hanseokbong font-bold whitespace-nowrap break-keep mt-[12px]"
              weight={700}
              size={20}
              leading="100%"
            >
              1980년 8월27일 08:10
            </GapyeongWaveText>
          </div>
          <div className="mt-[20px] mx-1.5 mb-[15px]">
            <table>
              <thead>
                <tr className="font-zen text-xl">
                  <th></th>
                  <th>時</th>
                  <th>日</th>
                  <th>月</th>
                  <th>年</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <RowHeadCell label="十星" subLabel="(십성)" />
                  <td>
                    <CellContent label="傷官" subLabel="(상관)" />
                  </td>
                  <td>
                    <CellContent label="比肩" subLabel="(비견)" />
                  </td>
                  <td>
                    <CellContent label="傷官" subLabel="(상관)" />
                  </td>
                  <td>
                    <CellContent label="傷官" subLabel="(상관)" />
                  </td>
                </tr>
                <tr>
                  <RowHeadCell label="天干" subLabel="(천간)" />
                  <td>
                    <ElementCell korean="임" chinese="壬" element="陽水" />
                  </td>
                  <td>
                    <ElementCell korean="정" chinese="丁" element="陰火" />
                  </td>
                  <td>
                    <ElementCell korean="계" chinese="癸" element="陰水" />
                  </td>
                  <td>
                    <ElementCell korean="계" chinese="癸" element="陰水" />
                  </td>
                </tr>
                <tr>
                  <RowHeadCell label="地支" subLabel="(지지)" />
                  <td>
                    <ElementCell korean="인" chinese="寅" element="陽木" />
                  </td>
                  <td>
                    <ElementCell korean="사" chinese="巳" element="陰火" />
                  </td>
                  <td>
                    <ElementCell korean="해" chinese="亥" element="陰水" />
                  </td>
                  <td>
                    <ElementCell korean="유" chinese="酉" element="陰金" />
                  </td>
                </tr>
                <tr>
                  <RowHeadCell label="十星" subLabel="(십성)" />
                  <td>
                    <CellContent label="比肩" subLabel="(비견)" />
                  </td>
                  <td>
                    <CellContent label="劫財" subLabel="(겁재)" />
                  </td>
                  <td>
                    <CellContent label="食神" subLabel="(식신)" />
                  </td>
                  <td>
                    <CellContent label="偏財" subLabel="(편재)" />
                  </td>
                </tr>
                <tr>
                  <RowHeadCell label="十二運星" subLabel="(십이운성)" />
                  <td>
                    <CellContent label="死" subLabel="(사)" />
                  </td>
                  <td>
                    <CellContent label="帝旺" subLabel="(제왕)" />
                  </td>
                  <td>
                    <CellContent label="胎" subLabel="(태)" />
                  </td>
                  <td>
                    <CellContent label="長生" subLabel="(장생)" />
                  </td>
                </tr>
                <tr>
                  <RowHeadCell label="十二神殺" subLabel="(십이신살)" />
                  <td>
                    <CellContent label="劫殺" subLabel="(겁살)" />
                  </td>
                  <td>
                    <CellContent label="地殺" subLabel="(지살)" />
                  </td>
                  <td>
                    <CellContent label="驛馬殺" subLabel="(역마살)" />
                  </td>
                  <td>
                    <CellContent label="將星殺" subLabel="(장성살)" />
                  </td>
                </tr>
                <tr>
                  <RowHeadCell label="貴人" subLabel="(귀인)" />
                  <td>
                    <CellContent subLabel="(없음)" />
                  </td>
                  <td>
                    <CellContent subLabel="(없음)" />
                  </td>
                  <td>
                    <CellContent label="天乙" subLabel="(천을귀인)" />
                  </td>
                  <td>
                    <CellContent label="天乙" subLabel="(천을귀인)" />
                    <CellContent label="太極" subLabel="(태극귀인)" />
                    <CellContent label="文昌" subLabel="(문창귀인)" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
