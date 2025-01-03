import { ActivityIndicator, Text, TouchableOpacity ,GestureResponderEvent} from "react-native";


interface CustomButtonProps {
    title: string;
    handlePress: (event: GestureResponderEvent) => void;
    isLoading?: boolean;
    textStyles?: string;
    containerStyles?: string; 
}

export const CustomButton :React.FC<CustomButtonProps> = ({title,
    handlePress,
    containerStyles = "",
    textStyles = "",
    isLoading = false,}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
     <Text className={`text-white font-psemibold text-lg ${textStyles}`}>{title}</Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  )
}