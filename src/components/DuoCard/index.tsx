import { TouchableOpacity, View } from "react-native";
import { GameController } from "phosphor-react-native"
import { THEME } from "../../theme";
import { DuoInfo } from "../DuoInfo";
import {Text} from "react-native" 
import { styles } from "./styles";

export interface DuoCardProps {
  id: string;
  name: string;
  YearsPlaying: number;
  WeekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect } : Props) {
  return (
    <View style={styles.container}>
      <DuoInfo 
        label="Nome" 
        value={data.name} 
      />
      <DuoInfo 
        label="Tempo de jogo" 
        value={`${data.YearsPlaying} ano(s)`} 
      />
      <DuoInfo 
        label="Disponibilidade" 
        value={`${data.WeekDays.length} dias \u2022 ${data.hourStart}-${data.hourEnd} `} 
      />
      <DuoInfo 
        label="Chamada de áudio" 
        value={data.useVoiceChannel ? 'sim' : 'não'} 
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT} 
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController 
          size={20}
          color={THEME.COLORS.TEXT}
        />
        <Text style={styles.buttonTitle} >
            Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
