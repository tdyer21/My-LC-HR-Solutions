class Solution(object):
    def shuffle(self, nums, n):
        """
        :type nums: List[int]
        :type n: int
        :rtype: List[int]
        """
        retarr = len(nums)*[]
        for i in range(0, len(nums)/2):
            retarr.append(nums[i])
            retarr.append(nums[i+n])
        return retarr
        