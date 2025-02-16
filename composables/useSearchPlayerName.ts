import { ref, computed } from "vue";
import type { Player } from "~/types/playerTypes";

export const useSearchPlayerName = (players: Player[]) => {
  const searchQuery = ref("");
  const getFilteredPlayers = computed(() => {
    return players.length
      ? players.filter((player) =>
          player.Name.toLowerCase().includes(searchQuery.value.toLowerCase()),
        )
      : [];
  });
  return { searchQuery, getFilteredPlayers };
};
